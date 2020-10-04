
import React, { useEffect, useState } from 'react';
import "./styles/App.css"
import Login from './components/Login'
import { getTokenFromUrl } from './helpers/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player'
import { useDataLayerValue } from './helpers/DataLayer'

const spotify = new SpotifyWebApi()

const App = () => {

  const [{ token, search }, dispatch] = useDataLayerValue()
  const [response, setResponses] = useState()
  useEffect(() => {
    const hash = getTokenFromUrl()
    // window.location.hash = ''
    const _token = hash.access_token
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
      spotify.searchTracks(search).then(response => {
        console.log(response)
        setResponses(response)
        dispatch({
          type: "SET_RESULT",
          result: response,
        })
      })
    }
  }, [search])
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} response={response}/>
        )
          :
          (
            <Login />
          )
      }

    </div>
  );
}

export default App;
