from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, LargeBinary
from sqlalchemy.ext.declarative import declarative_base

from database.base_model import Base


class ProductImage(Base):
    __tablename__ = 'product_images'

    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey('products.id'))
    blob = Column(LargeBinary, nullable=False)
    is_preview = Column(Boolean, default=False)
