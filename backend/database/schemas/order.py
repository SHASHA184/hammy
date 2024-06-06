from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


class OrderItemSchema(BaseModel):
    id: Optional[int] = Field(None, example=1)
    order_id: Optional[int] = Field(None, example=1)
    product_id: Optional[int] = Field(..., example=1)
    quantity: int = Field(..., example=1)


class OrderSchema(BaseModel):
    id: Optional[int] = Field(None, example=1)
    user_id: Optional[int] = Field(None, example=1)
    competed: Optional[bool] = Field(False, example=False)
    sended: Optional[bool] = Field(False, example=False)
    total_price: Optional[float] = Field(None, example=100.0)
    order_time: Optional[datetime] = Field(datetime.now(), example=datetime.now())
    order_items: Optional[List[OrderItemSchema]] = Field(
        None, example=[{"product_id": 1, "quantity": 1}]
    )