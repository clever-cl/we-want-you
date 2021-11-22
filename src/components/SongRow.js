import React from 'react'
import "../styles/SongRow.css"

const SongRow = ({ album_image, album_name, artist_name, track_id, playSong }) => {
  
    return (
        <div className="songRow" onClick={() =>playSong(track_id)} >
        <img className="songRow__album" src={album_image}  alt="AlbumImage" /> 
             
            <div className="songRow__info">
                <p> {artist_name.toString() } --
                    { album_name}</p>
            </div> 
        </div>
    )
}

export default SongRow
