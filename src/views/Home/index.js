import { React , useEffect , useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';

import { isAuthenticated as isAuthenticatedAtom , 
         spoRefreshToken as spoRefreshTokenAtom , 
         spoTokenResponse as spoTokenResponseAtom } from '../../recoil/auth/atoms'
import {spoAuthCall} from "../../utils";
import logo from './style/Spotify-logotipo.jpg';
import './style/App.css';



const apiSpotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_CALLBACK_HOST}&scope=user-read-private`;

export default function Home() {
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedAtom);
    const [spoRefreshToken, setSpoRefreshToken] = useRecoilState(spoRefreshTokenAtom);
    const [spoTokenResponse, setSpoTokenResponse] = useRecoilState(spoTokenResponseAtom);


    const autenticateUser = useCallback( async (spoCode) => {
        try {
            let response ;
            if (spoRefreshTokenAtom) {
                // as la llamada
            } else {
                response = await spoAuthCall(spoCode);
            }
            setSpoRefreshToken(response?.refresh_token);
            setSpoTokenResponse(response);
            setIsAuthenticated(true);
            // redirigir a buscador de canciones
        } catch (error) {
            console.log(error);
        }
    }, [setSpoRefreshToken, setSpoTokenResponse, setIsAuthenticated, spoRefreshTokenAtom]);
   
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const spoCode = urlParams.get("code");
        if (spoCode) autenticateUser(spoCode);
    }, [location.search]);

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