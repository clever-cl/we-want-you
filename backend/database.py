from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
SQLALCHEMY_DATABASE_URL = "postgresql://qxgutoppgioovt:355729ab561e1ae24370c5a4a189ce7725d017ea1d153c936a71336ed5e52353@ec2-52-72-34-184.compute-1.amazonaws.com:5432/dbd3kko5au1v91"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()