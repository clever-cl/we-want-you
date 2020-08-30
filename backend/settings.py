from pydantic import BaseSettings


class Settings(BaseSettings):
    sqlalchemy_url: str = "postgres://qxgutoppgioovt:355729ab561e1ae24370c5a4a189ce7725d017ea1d153c936a71336ed5e52353@ec2-52-72-34-184.compute-1.amazonaws.com:5432/dbd3kko5au1v91"


settings = Settings()