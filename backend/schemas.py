from typing import List

from pydantic import BaseModel, Json

class ResultBase(BaseModel):
    search: str
    search_type: str
    result: Json


class ResultCreate(ResultBase):
    pass

class Result(ResultBase):
    id: int

    class Config:
        orm_mode = True