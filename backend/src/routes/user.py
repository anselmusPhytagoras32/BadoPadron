from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.schemas.user import CustomerResponse, CustomerLookup
from db.models.user import Customer
from db.session import Session as DBSession # Assuming you have a get_db dependency

router = APIRouter()

def get_db():
    db = DBSession()
    try:
        yield db
    finally:
        db.close()

@router.get("/customers/lookup/{phone_number}", response_model=CustomerResponse,
                # Document the expected error format for the SwaggerUI
                responses={
                    404: {
                        "description": "Not Found - User Not Found",
                        "content": {
                            "application/json": {
                                "example": {"detail": "Database error: Username already exists"}
                            }
                        }
                    }
                }
            )
def lookup_customer(phone_number: str, db: Annotated[Session, Depends(get_db)]):
    customer = db.query(Customer).filter(
        Customer.phone_number == phone_number
    ).first()

    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")

    return customer


@router.post("/customers", response_model=CustomerResponse,
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
def create_guest_customer(guest_data: CustomerLookup, db: Annotated[Session, Depends(get_db)]):
    existing_customer = db.query(Customer).filter(
        Customer.phone_number == guest_data.phone_number
    ).first()

    if existing_customer:
        raise HTTPException(status_code=400, detail="Phone number already registered")

    new_customer = Customer(
        full_name=guest_data.full_name,
        phone_number=guest_data.phone_number,
        is_guest=True
    )
    
    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)
    
    return new_customer