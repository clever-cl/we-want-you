import React, { useEffect } from 'react';

import logo from './style/Spotify-logotipo.jpg';
import './style/App.css';
import { useLocation } from 'react-router';


const apiSpotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_CALLBACK_HOST}&scope=user-read-private`;

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(Location.search);
        const spoCode = urlParams.get("code");
        console.log(spoCode);
    },[]);

    const handleLoginClick = () => {
        window.location.replace(apiSpotifyUrl);
    };
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Buscador de Albunes</p>

                <button onClick={handleLoginClick}>Iniciar sesion</button>

                 
            </header>
        </div>
    );
}