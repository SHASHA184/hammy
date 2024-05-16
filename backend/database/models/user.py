from sqlalchemy import Column, Integer, Text, Boolean
# from base_model import Base
from sqlalchemy import Column, Integer, Text, Boolean
from sqlalchemy.orm import validates
# from .base_model import Base
import re


from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import MetaData


# metadata_user = MetaData(schema="user")
Base = declarative_base()
metadata = Base.metadata

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(Text)
    email = Column(Text, unique=True)
    address = Column(Text)
    phone_number = Column(Text)
    password = Column(Text)
    is_admin = Column(Boolean, default=False)

    @validates('phone_number')
    def validate_phone_number(self, key, phone_number):
        # Implement your phone number validation logic here
        # Return the validated phone number or raise an exception if it's invalid
        # Example validation: ensuring the phone number has 10 digits
        if not re.match(r'^\d{10}$', phone_number):
            raise ValueError("Phone number must have 10 digits")
        return phone_number

    @validates('email')
    def validate_email(self, key, email):
        # Implement your email validation logic here
        # Return the validated email or raise an exception if it's invalid
        # Example validation: ensuring the email has a valid format
        if not re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email):
            raise ValueError("Invalid email format")
        return email
    
    def __repr__(self) -> str:
        return f"{self.name} - {self.email} - {self.phone_number}"