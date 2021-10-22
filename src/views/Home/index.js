import React from 'react';

import logo from './style/Spotify-logotipo.jpg';
import './style/App.css';

export default function Home() {
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Buscador de Albunes</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Iniciar Secion
                </a>
            </header>
        </div>
    );
}