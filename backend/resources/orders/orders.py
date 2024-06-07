from fastapi import FastAPI, HTTPException, Depends, status, APIRouter, Query
from sqlalchemy.orm import Session
from database.base_model import Base
from database.conn import get_db
from typing import List

from database.models.order import Order
from database.models.order_item import OrderItem
from database.schemas.order import OrderSchema, OrderItemSchema

from loguru import logger

router = APIRouter()


@router.get("/orders/{order_id}", response_model=OrderSchema)
async def get_order(order_id: int, db: Session = Depends(get_db)):
    order = await Order.get(db, order_id)
    if order is None:
        raise HTTPException(status_code=404, detail="Order not found")
    order_items = await OrderItem.get(db, order_id)
    order.order_items = order_items
    return order


@router.get("/orders/user/{user_id}", response_model=List[OrderSchema])
async def get_user_orders(user_id: int, db: Session = Depends(get_db)):
    orders = await Order.get_user_orders(db, user_id)
    if not orders:
        raise HTTPException(status_code=404, detail="Orders not found")
    for order in orders:
        order_items = await OrderItem.get(db, order.id)
        order.order_items = order_items
    return orders


@router.post("/orders/create", response_model=OrderSchema)
async def create_order(order: OrderSchema, db: Session = Depends(get_db)):
    order_instance = await Order.create(db, order)
    return order_instance
