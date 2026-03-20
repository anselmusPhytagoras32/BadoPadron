import uuid, datetime
from sqlalchemy import Column, DateTime, ForeignKey, String, UUID
from backend.src.db.base import Base
from sqlalchemy.orm import relationship

class Owner(Base):
    __tablename__ = 'owner'

    owner_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    owner_name = Column(String, nullable=False)
    password = Column(String, nullable=False)
    date_created = Column(DateTime, datetime.UTC)

    customers = relationship("Customer", back_populates="managed_by")

class Customer(Base):
    __tablename__ = 'customer'

    customer_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    customer_name = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    password = Column(String, nullable=False)
    
    # For multi tenancy
    owner_id = Column(UUID(as_uuid=True), ForeignKey("owners.id"))

    date_created = Column(DateTime, datetime.UTC)

    managed_by = relationship("Owner", back_populates="customers")
    measurements = relationship("Measurement", back_populates="customer", cascade="all, delete-orphan")
    orders = relationship("Order", back_populates="customer", cascade="all, delete-orphan")

