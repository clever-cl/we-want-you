import React, { useState, useEffect } from 'react'
import "../styles/Header.scss"
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from '../helpers/DataLayer';


const Header = ({ spotify, response }) => {
  console.log(response)

  const [{ user }, dispatch] = useDataLayerValue()
 

  const [inputValue, setInputValues] = useState('')
  const path = "http://localhost:5000"

  const showResults = (e) => {
    e.preventDefault()
    dispatch({
      type: 'SET_SEARCH',
      search: inputValue
    })
  }

  const deleteResponse = async (myList) => {
    const res = await fetch(`${path}/results/1`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
      },
    })
    const data = await res.json()
    console.log(data)
    if (data.error) {
      console.log("error")
    } else {
      postResponse(myList)
    }
  }

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
    console.log(data)
    if (data.error) {
      console.log("error")
    } else {
      console.log("success")
    }
  }

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
      myList.push(data)
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
      {/*   <button onClick={asdasd}>press</button> */}
      <form class="search" onSubmit={(e) => showResults(e)}>
        <div class="search__wrapper">
          <input type="text" name="" placeholder="Search for something..." class="search__field " onChange={(e) => setInputValues(e.target.value)} />
          <button type="submit" class="search__icon"><svg x="0px" y="0px" viewBox="0 0 24 24" width="20px" height="20px">
            <g stroke-linecap="square" stroke-linejoin="miter" stroke="currentColor">
              <line fill="none" stroke-miterlimit="10" x1="22" y1="22" x2="16.4" y2="16.4" />
              <circle fill="none" stroke="currentColor" stroke-miterlimit="10" cx="10" cy="10" r="9" />
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
