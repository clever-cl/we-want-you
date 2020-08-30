import requests
from enum import Enum
from app import config
from typing import List, Optional
from pydantic import BaseModel
from fastapi import APIRouter, Header, Depends, HTTPException

# importing ORM
from sqlalchemy.orm import Session
import crud, deps, models, schemas


# class to receive client data to get api token 
class Client_auth(BaseModel):
    client_id: str
    client_secret: str


class SpotifyType(str, Enum):
    artist = "artist"
    album = "album"

router = APIRouter()


@router.post("/spotify/api/token")
def get_spotify_api_token(client_auth: Client_auth):
    """
    Request api token from spotify 

    We will use this Bearer access token to login into other spotify apis

    current spotify documentation:

    https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow

    """
    url = "https://accounts.spotify.com/api/token"
    spotify_client_data = {
        "grant_type": "client_credentials",
        "client_id": client_auth.client_id, 
        "client_secret": client_auth.client_secret
    }

    response = requests.post(url, data=spotify_client_data)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail = response.json() )

    return response.json()



@router.get("/spotify/{spotify_type}/{spotify_search}")
def search_spotify_data_by_type( spotify_type: SpotifyType , spotify_search: str, Authorization: Optional[str] = Header(None),  db: Session = Depends(deps.get_db)):
    """
    Get Spotify Catalog information about albums, artists that match a keyword string.

    Create Result from Spotify Data

    Require authentication

    """
    
    if spotify_type == 'artist' or spotify_type == 'album':
        url = "https://api.spotify.com/v1/search?q=" + str(spotify_search) + "&type=artist&limit=40"
        headers = { "Authorization": Authorization }
        response = requests.get(url,headers=headers)

        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail = response.json())

        # instancing result model
        result = models.Result()
        result.search = spotify_search
        result.search_type = "artist"
        result.result = response.json()

        create_result = crud.create_results(db,result)

        return { 
            "id": create_result.id ,
            "search": create_result.search,
            "search_type": create_result.search_type,
            "result": response.json()
        }

    else: 
        return { "detail": { "error": "spotify_type", "error_description": "Invalid spotify type, you have to choose between 'artist' or 'album'" } }
    
