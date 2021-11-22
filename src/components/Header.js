import React, { useState, useEffect } from 'react'
import "../styles/Header.scss"
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from '../helpers/DataLayer';


const Header = ({ response, getResponse }) => {

  const [{ user }, dispatch] = useDataLayerValue()
 

  const [inputValue, setInputValues] = useState('')
  const path = "https://biceproject.pythonanywhere.com"
//form to save input value 
  const showResults = (e) => {
    e.preventDefault()
    dispatch({
      type: 'SET_SEARCH',
      search: inputValue
    })
  }
//deleting response from backend
  const deleteResponse = async (myList) => {
    const res = await fetch(`${path}/results/1`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
      },
    })
    const data = await res.json()
    if (data.error) {
      console.log("error")
    } else {
      postResponse(myList)
    }
  }
//creating new response in backend
  const postResponse = async (myList) => {
    const res = await fetch(`${path}/results/`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        response: myList
      })
    })
    const data = await res.json()
    if (data.error) {
      console.log("error")
    } else {
      getResponse()
    }
    
  }
//getting data for post to backend
  const mapping = () => {
    const songs = response.tracks.items
    const myList = []
    songs.map(({ id, album, artists }) => {
      const artistsList = artists.map(({ name }) => name)
      let data = {
        album_image: album.images[0].url,
        album_name: album.name,
        track_id: id,
        artist_name: artistsList
      }
      return myList.push(data)
    })
    deleteResponse(myList)
  }

  useEffect(() => {
    if (response) {
      mapping()

    } else {
      console.log("DATA IS EMPTY")
    }

  }, [response])

  return (
    <div className="header">
      <form className="search" onSubmit={(e) => showResults(e)}>
        <div className="search__wrapper">
          <input type="text" name="" placeholder="Search for something..." className="search__field " onChange={(e) => setInputValues(e.target.value)} />
          <button type="submit" className="search__icon"><svg x="0px" y="0px" viewBox="0 0 24 24" width="20px" height="20px">
            <g strokeLinecap="square" strokeLinejoin="miter" stroke="currentColor">
              <line fill="none" strokeMiterlimit="10" x1="22" y1="22" x2="16.4" y2="16.4" />
              <circle fill="none" stroke="currentColor" strokeMiterlimit="10" cx="10" cy="10" r="9" />
            </g>
          </svg></button>
        </div>
        <button className="header__button" type="submit"> Search</button>
      </form>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>

      </div>
    </div>
  )
}

export default Header
