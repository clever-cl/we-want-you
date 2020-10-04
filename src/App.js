//http://biceproject.pythonanywhere.com/result
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
  const [data, setData] = useState([])
  //receiving response from backend
  const getResponse = async () => {
    const res = await fetch(`https://biceproject.pythonanywhere.com/result/`)
    const data = await res.json()
    setData(data[0].response)
  }
  useEffect(() => {
//
    const hash = getTokenFromUrl()
    const _token = hash.access_token
  
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      //setting token in spotify-web-api-js
      spotify.setAccessToken(_token)
      //getting info about my spotify account
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
        setResponses(response)

      })
      getResponse()
    }
  }, [search])

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} response={response} data={data} getResponse={getResponse}/>
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
