from sqlalchemy.orm import Session
from sqlalchemy import inspect

import models, schemas

def get_results(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Result).offset(skip).limit(limit).all()

def create_results(db: Session, result: models.Result):
    db_result = models.Result( search=result.search, search_type=result.search_type, result=result.result )
    db.add(db_result)
    db.commit()
    db.refresh(db_result)
    return db_result