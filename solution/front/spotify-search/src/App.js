import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import SongsTable from './components/songs-table';
import AppHeader from './components/app-header';
import AppLoader from './components/app-loader';

const baseUrl = 'http://localhost:8080/v1/songs';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('Elvis');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  function handleSearchFieldChange(event) {
    setSearchValue(event.target.value);
  }

  function searchSongs() {
    setLoading(true);
    fetch(`${baseUrl}/${searchValue}?offset=${offset}&limit=${limit}`)
      .then(async res => await res.json())
      .then(async (result) => {
        setLoading(false);
        console.log('result.tracks', result.tracks);
        setItems({... result.tracks})
      })
  }

  return (
    <div className="App">
      <AppHeader/>
      <div>
        <div>
          <label for="spotifySearch">Search artist and albums on Spotify:</label>
          <input
            type="search"
            id="spotifySearch"
            name="spotifySearch"
            value={searchValue}
            onChange={handleSearchFieldChange}
          /> 
          <button onClick={searchSongs}>
            Search
          </button>
        </div>
        <div>
          { loading ? <AppLoader/> : <SongsTable items={items} />}
        </div>
      </div>
    </div>
  );
}

export default App;
