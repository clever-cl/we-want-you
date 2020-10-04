import React, { useState } from 'react'
import "../styles/Body.css"
import Header from './Header'
import { useDataLayerValue } from '../helpers/DataLayer'
import SongRow from './SongRow'
import SpotifyPlayer from 'react-spotify-player';
const Body = ({ spotify, response }) => {
    const [id, setId] = useState(null)
    const size = {
        width: '100%',
        height: 300,
    };
    const view = 'list'
    const theme = 'black'
    const [{ result }] = useDataLayerValue()
  //  console.log(result)
    

    const playSong = (id) => {
 //       console.log(id)
        setId(id)
    };
    return (
        <div className="body">
            <Header spotify={spotify} response={response}/>
            <SpotifyPlayer
                uri={`spotify:track:${id}`}
                size={size}
                view={view}
                theme={theme}
            />
            <div className="body__songs">
                {result?.tracks.items.map(item => (
                    <SongRow track={item} playSong={playSong} />
                ))}
            </div>
        </div>
    )
}

export default Body
