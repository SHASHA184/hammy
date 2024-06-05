from pydantic import BaseModel, Field
from typing import Optional

class ProductSchema(BaseModel):
    id: str = Field(..., example="Product ID")
    name: str = Field(..., example="Product Name", max_length=255)
    description: Optional[str] = Field(None, example="Product Description")
    price: float = Field(..., example=10.0, gt=0, description="Price of the product")
    quantity: Optional[int] = Field(None, example=10, ge=0, description="Quantity of the product")
    category_id: int = Field(..., example=1, description="Category ID of the product")