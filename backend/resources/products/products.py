from fastapi import FastAPI, HTTPException, Depends, status, APIRouter
from sqlalchemy.orm import Session
from database.base_model import Base
from database.conn import get_db
from database.models.product import Product
from database.models.product_image import ProductImage
from database.models.category import Category
from database.schemas.product import ProductSchema
from database.schemas.category import CategorySchema
from typing import List


router = APIRouter()


@router.get("/products", response_model=List[ProductSchema])
async def get_products(name: str = None,db: Session = Depends(get_db)):
    if name:
        products = await Product.get_all(db, name=name)
    else:
        products = await Product.get_all(db)
    return products


@router.get("/products/{product_id}", response_model=ProductSchema)
async def get_product(product_id: int, db: Session = Depends(get_db)):
    product = await Product.get(db, product_id)
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@router.post("/products/create", response_model=ProductSchema)  # Include response_model
async def create_product(product: ProductSchema, db: Session = Depends(get_db)):
    product = await Product.create(db, product)
    return product
