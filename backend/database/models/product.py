from sqlalchemy import Column, Integer, String, Float, ForeignKey, Text, select, asc, desc

from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from database.schemas.product import ProductSchema

from database.base_model import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    price = Column(Float, nullable=False)
    quantity = Column(Integer, nullable=True)
    category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)

    @classmethod
    async def create(cls, db, product: ProductSchema):
        instance = cls(**product.model_dump())
        await instance.save(db)
        return instance

    @classmethod
    async def get_all(cls, db, name: str = None):
        statement = select(cls)
        if name:
            statement = statement.where(cls.name.ilike(f"%{name}%"))
        result = await db.execute(statement)
        return result.scalars().all()

    @classmethod
    async def get(cls, db, product_id):
        statement = select(cls).where(cls.id == product_id)
        result = await db.execute(statement)
        return result.scalar()

    @staticmethod
    async def get_sorted(db, field_to_sort: str, sort_order: str):
        if sort_order == "asc":
            statement = select(Product).order_by(asc(getattr(Product, field_to_sort)))
        else:
            statement = select(Product).order_by(desc(getattr(Product, field_to_sort)))
        
        result = await db.execute(statement)
        return result.scalars().all()
