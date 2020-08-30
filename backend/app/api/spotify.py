import requests
from app import config
from typing import List
from pydantic import BaseModel
from fastapi import APIRouter, Depends, HTTPException


class Client_auth(BaseModel):
    client_id: str
    client_secret: str


router = APIRouter()


@router.post("/spotify/api/token")
def get_spotify_api_token(client_auth: Client_auth):
    """
    Get api token from spotify 

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


@router.get("/spotify/{spotify_search}")
def get_music_by_string(spotify_search: str):
    """
    Get pokemon data by id

    Read data for a specific pokemon consuming from pokeapi
    
    Doesn't require authentication
    """
    url = "https://pokeapi.co/api/v2/pokemon/" + str(spotify_search)
    response = requests.get(url)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Pokemon not found")

    return response.json()