from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy.orm import Session

from db.schemas.user import OwnerCreate, OwnerRequest 
from db.models.user import Owner
from db.session import Session as DBSession
from core.security import hash_password, verify_hash

router = APIRouter()

def get_db():
    db = DBSession()
    try:
        yield db
    finally:
        db.close()

# Quick schema just for logging in
class OwnerLogin(BaseModel):
    username: str
    password: str

@router.post("/owners/register", response_model=OwnerRequest, status_code=status.HTTP_201_CREATED,
             # Document the expected error format for the SwaggerUI
                responses={
                    400: {
                        "description": "Bad Request - Registration Failed",
                        "content": {
                            "application/json": {
                                "example": {"detail": "Database error: Username already exists"}
                            }
                        }
                    }
                }
            )
async def register_owner(owner_data: OwnerCreate, db: Annotated[Session, Depends(get_db)]):
    if (
        existing_owner := db.query(Owner)
        .filter(existing_owner.username == owner_data.username)
        .first()
    ):
        raise HTTPException(status_code=400, detail="Username already taken")

    hashed_pwd = hash_password(owner_data.password)

    new_owner = Owner(
        full_name=owner_data.full_name,
        username=owner_data.username,
        password=hashed_pwd
    )

    db.add(new_owner)
    db.commit()
    db.refresh(new_owner)

    return new_owner


@router.post("/owners/login", response_model=OwnerRequest,
             responses={
                    401: {
                        "description": "Unauthorized - Authorization Required",
                        "content": {
                            "application/json": {
                                "example": {"detail": "Database error: Username already exists"}
                            }
                        }
                    }
                })
async def login_owner(login_data: OwnerLogin, db: Annotated[Session, Depends(get_db)]):
    owner = db.query(Owner).filter(Owner.username == login_data.username).first()
    
    if not owner or not verify_hash(login_data.password, owner.password):
        raise HTTPException(
            status_code=401, 
            detail="Invalid username or password"
        )

    # If successful, return the owner profile (password is hidden by OwnerRequest schema!)
    return owner