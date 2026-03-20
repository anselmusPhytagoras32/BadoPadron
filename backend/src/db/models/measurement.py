import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from db.base import Base

class Measurement(Base):
    __tablename__ = 'measurement'

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    customer_id = Column(String(36), ForeignKey("customer.id"), nullable=False)
    label = Column(String(50), nullable=False, default="Standard")

    shoulder = Column(Float, nullable=True)
    chest = Column(Float, nullable=True)
    arm_length = Column(Float, nullable=True)
    neck = Column(Float, nullable=True)
    waist = Column(Float, nullable=True)
    hips = Column(Float, nullable=True)
    crotch = Column(Float, nullable=True)
    leg_length = Column(Float, nullable=True)
    
    date_created = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    customer = relationship("Customer", back_populates="measurements")
    orders = relationship("Order", back_populates="measurement")