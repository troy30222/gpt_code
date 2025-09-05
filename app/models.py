from sqlalchemy import Column, Integer, String, Float, Date
from .database import Base


class Record(Base):
    __tablename__ = "records"

    id = Column(Integer, primary_key=True, index=True)
    category = Column(String, index=True)
    value = Column(Float)
    date = Column(Date)
