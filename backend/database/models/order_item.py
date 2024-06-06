import re
import datetime
from sqlalchemy import Column, Integer, Boolean, ForeignKey, Float, DateTime, select
from sqlalchemy.orm import validates
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from database.schemas.order import OrderItemSchema
from database.base_model import Base
from typing import List


class OrderItem(Base):
    __tablename__ = "order_items"

    id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    product_id = Column(Integer, ForeignKey("products.id"))
    quantity = Column(Integer)

    @classmethod
    async def create(cls, session, order_items: List[OrderItemSchema]):
        for order_item in order_items:
            instance = cls(**order_item.dict())
            await instance.save(session)
        return True
    
    @classmethod
    async def get(cls, session, order_id):
        statement = select(cls).where(cls.order_id == order_id)
        result = await session.execute(statement)
        return result.scalars().all()