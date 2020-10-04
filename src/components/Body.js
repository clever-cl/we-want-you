import React, { useState } from 'react'
import "../styles/Body.css"
import Header from './Header'
import SongRow from './SongRow'
import SpotifyPlayer from 'react-spotify-player';
const Body = ({ spotify, response, data, getResponse }) => {
    const [id, setId] = useState(null)
    const size = {
        width: '100%',
        height: 300,
    };
//play song whe click
    const playSong = (id) => {
        setId(id)
    };
    return (
        <div className="body">
            <Header spotify={spotify} response={response} getResponse={getResponse} />
            <SpotifyPlayer
                uri={`spotify:track:${id}`}
                size={size}
            />
            <div className="body__songs">
                {data?.map(({album_image, album_name, artist_name, track_id}) => (
                    <div key={track_id}>
                    <SongRow album_image={album_image} album_name={album_name} artist_name={artist_name} track_id={track_id} playSong={playSong}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Body
