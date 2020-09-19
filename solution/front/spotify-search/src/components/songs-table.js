import React from 'react';

export default function SongsTable(props) {
  function renderSong(song) {
    return (
      <tr>
        <td>{song.name}</td>
        <td>{song.artists[0].name}</td>
        <td>{song.album.name}</td>
        <td>{song.id}</td>
      </tr>
    )
  }

  return (
    <div>
      <ul>
        <li>Total songs found: {props.items.total || 0}</li>
        {props.items.total && <li>Showing songs from '{props.items.offset || 0}' to '{props.items.limit || 20}'</li>}
      </ul>
      <div>
        <table>
          {props.items.total && 
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Spotify ID</th>
          </tr>}
          {props.items.total && props.items.items.map(song => renderSong(song))}
        </table>
      </div>
    </div>
  )
}
