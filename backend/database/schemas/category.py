from pydantic import BaseModel, Field
from typing import Optional, List

class CategorySchema(BaseModel):
    title: str = Field(..., example="Category Title", max_length=255)