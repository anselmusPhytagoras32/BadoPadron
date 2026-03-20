import uuid
from datetime import datetime, timezone, date
from sqlalchemy import Column, String, Date, DateTime, ForeignKey, Numeric
from sqlalchemy.orm import relationship
from db.base import Base

class Order(Base):
    __tablename__ = 'order'

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    customer_id = Column(String(36), ForeignKey("customer.id"), nullable=False)
    measurement_id = Column(String(36), ForeignKey("measurement.id"), nullable=False)
    
    item_type = Column(String(100), nullable=False)
    description = Column(String(255), nullable=True)
    status = Column(String(50), default="QUEUED", index=True)
    due_date = Column(Date, nullable=False, index=True)
    
    total_price = Column(Numeric(10, 2), default=0.00)
    downpayment = Column(Numeric(10, 2), default=0.00)
    
    date_created = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    customer = relationship("Customer", back_populates="orders")
    measurement = relationship("Measurement", back_populates="orders")