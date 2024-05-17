import re
import datetime
from sqlalchemy import Column, Integer, Text, Boolean, ForeignKey, Float, DateTime
from sqlalchemy.orm import validates
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

from database.base_model import Base


class ShippingAddress(Base):
    __tablename__ = 'shipping_addresses'

    id = Column(Integer, primary_key=True)
    address = Column(Text)
    city = Column(Text)
    date_added = Column(DateTime, default=datetime.datetime.now)
    zipcode = Column(Integer)

