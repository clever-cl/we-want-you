from starlette.testclient import TestClient
from random import randint
from app import config
import requests

from app.main import app
client = TestClient(app)


def test_search_spotify_data_by_album ():

    # get api token from spotify
    response_api_token = client.post(
        "/spotify/api/token",
        json= {
            "client_id": config.settings.spotify_cliend_id,
            "client_secret": config.settings.spotify_cliend_secret 
        }
    )

    access_token = response_api_token.json()["access_token"]
    token_type = response_api_token.json()["token_type"]
    headers = { "Authorization": token_type + " " +  access_token}

    url ="/spotify/album/Metallica"
    response = client.get(url, headers=headers)

    assert response.status_code == 200


def test_search_spotify_data_by_artist ():

    # get api token from spotify
    response_api_token = client.post(
        "/spotify/api/token",
        json= {
            "client_id": config.settings.spotify_cliend_id,
            "client_secret": config.settings.spotify_cliend_secret 
        }
    )

    access_token = response_api_token.json()["access_token"]
    token_type = response_api_token.json()["token_type"]
    headers = { "Authorization": token_type + " " +  access_token}

    url ="/spotify/artist/Metallica"
    response = client.get(url, headers=headers)

    assert response.status_code == 200



def test_search_spotify_data_by_invalid_route ():

    # get api token from spotify
    response_api_token = client.post(
        "/spotify/api/token",
        json= {
            "client_id": config.settings.spotify_cliend_id,
            "client_secret": config.settings.spotify_cliend_secret 
        }
    )

    access_token = response_api_token.json()["access_token"]
    token_type = response_api_token.json()["token_type"]
    headers = { "Authorization": token_type + " " +  access_token}

    url ="/spotify/anything/Metallica"
    response = client.get(url, headers=headers)

    assert response.status_code == 422

    # validating response 
    assert response.json() ==   {
                                    "detail": [
                                        {
                                            "loc": [
                                                "path",
                                                "spotify_type"
                                            ],
                                            "msg": "value is not a valid enumeration member; permitted: 'artist', 'album'",
                                            "type": "type_error.enum",
                                            "ctx": {
                                                "enum_values": [
                                                    "artist",
                                                    "album"
                                                ]
                                            }
                                        }
                                    ]
                                }



def test_search_spotify_data_by_api_token_problem ():

    access_token = "fopewk"
    token_type = "Bearer "
    headers = { "Authorization": token_type + " " +  access_token}

    url ="/spotify/artist/Metallica"
    response = client.get(url, headers=headers)

    assert response.status_code == 401
    assert response.json() == { "detail": { "error": { "status": 401, "message": "Invalid access token" } } }