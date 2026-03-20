from datetime import datetime
from pydantic import BaseModel, Field, ConfigDict
from uuid import UUID

class OwnerBase(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    full_name: str

# This inherits safe fields and adds the password
class OwnerCreate(OwnerBase):
    password: str = Field(..., min_length=8)

# This is what the frontend must to see
class OwnerRequest(BaseModel):
    owner_id: UUID
    username: str
    full_name: str
    date_created: datetime

class CustomerLookup(BaseModel):
    full_name: str
    phone_number: str


class CustomerRegister(BaseModel):
    phone_number: str
    password: str = Field(..., min_length=6)

# What the frontend sees
class CustomerResponse(BaseModel):
    id: UUID
    full_name: str
    phone_number: str
    is_guest: bool
    owner_id: UUID

    model_config = ConfigDict(from_attributes=True)

