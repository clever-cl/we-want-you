from starlette.testclient import TestClient
from random import randint
from app import config
import requests

from app.main import app
client = TestClient(app)

def test_get_spotify_api_token ():
    
    response = client.post(
        "/spotify/api/token",
        json= {
            "client_id": config.settings.spotify_cliend_id,
            "client_secret": config.settings.spotify_cliend_secret 
        }
    )

    assert response.status_code == 200


def test_get_spotify_api_token_invalid_client_id ():

    response = client.post(
        "/spotify/api/token",
        json= {
            "client_id": "1234qwer",
            "client_secret": config.settings.spotify_cliend_secret 
        }
    )

    assert response.status_code == 400
    assert response.json() == { "detail": { "error": "invalid_client", "error_description": "Invalid client" } }


def test_get_spotify_api_token_invalid_client_secret ():

    response = client.post(
        "/spotify/api/token",
        json= {
            "client_id": config.settings.spotify_cliend_id,
            "client_secret": "1234qwer" 
        }
    )

    assert response.status_code == 400
    assert response.json() == { "detail": { "error": "invalid_client", "error_description": "Invalid client secret" } }



