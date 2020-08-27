from fastapi import Depends, FastAPI, HTTPException
from fastapi.security import OAuth2PasswordRequestForm


app = FastAPI()


# testing fast api
@app.post("/hello_world")
def hello_world():
    """
    hello world! post.
    """
    return {
        "message": "hello world!"
    }