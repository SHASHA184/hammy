import re
import datetime
from sqlalchemy import Column, Integer, Boolean, ForeignKey, Float, DateTime
from sqlalchemy.orm import validates
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from .OrderItem import OrderItem
from database.base_model import Base

class Order(Base):
    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    competed = Column(Boolean, default=False)
    sended = Column(Boolean, default=False)
    total_price = Column(Float)
    order_time = Column(DateTime, default=datetime.datetime.now)
    
    order_items = relationship('OrderItem', backref='order')

    def get_cart_total(self):
        total = 0
        for order_item in self.order_items:
            total += order_item.price * order_item.quantity
        return total
    
    def get_cart_items(self):
        cart_items = []
        for order_item in self.order_items:
            cart_items.append({
                'product_id': order_item.product_id,
                'quantity': order_item.quantity,
                'price': order_item.price
            })
        return cart_items
