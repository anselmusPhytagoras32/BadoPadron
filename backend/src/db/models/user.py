import uuid
from datetime import datetime, timezone
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, String
from db.base import Base
from sqlalchemy.orm import relationship

class Owner(Base):
    __tablename__ = 'owner'

    owner_id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    username = Column(String(50), unique=True, index=True, nullable=False)
    full_name = Column(String(100), nullable=False)
    password = Column(String(255), nullable=False)
    
    date_created = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    customers = relationship("Customer", back_populates="managed_by")

class Customer(Base):
    __tablename__ = 'customer'

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String(100), nullable=False)
    phone_number = Column(String(20), nullable=False)

    password = Column(String(255), nullable=True) 
    is_guest = Column(Boolean, default=True)
    owner_id = Column(String(36), ForeignKey("owner.owner_id"))

    date_created = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    managed_by = relationship("Owner", back_populates="customers")
    measurements = relationship("Measurement", back_populates="customer", cascade="all, delete-orphan")
    orders = relationship("Order", back_populates="customer", cascade="all, delete-orphan")