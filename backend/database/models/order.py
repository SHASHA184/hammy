import re
import datetime
from sqlalchemy import Column, Integer, Boolean, ForeignKey, Float, DateTime, select
from sqlalchemy.orm import validates
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from .order_item import OrderItem
from database.base_model import Base
from database.schemas.order import OrderSchema, OrderItemSchema
from typing import List


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    competed = Column(Boolean, default=False)
    sended = Column(Boolean, default=False)
    total_price = Column(Float)
    order_time = Column(DateTime, default=datetime.datetime.now)

    @classmethod
    async def get(cls, session, order_id):
        statement = select(cls).where(cls.id == order_id)
        result = await session.execute(statement)
        return result.scalar()
    
    @classmethod
    async def get_user_orders(cls, session, user_id):
        statement = select(cls).where(cls.user_id == user_id)
        result = await session.execute(statement)
        return result.scalars().all()
    
    @classmethod
    async def create(cls, session, order: OrderSchema):
        order_items = order.order_items
        order_dict = order.dict()
        del order_dict["order_items"]
        order_instance = cls(**order_dict)
        await order_instance.save(session)
        for order_item in order_items:
            order_item.order_id = order_instance.id
        await OrderItem.create(session, order_items)
        return order_instance
    