import React from 'react'
import {loginUrl} from '../helpers/spotify'
import "../styles/Login.css"
const Login = () => {
    return (
        <div className="login">
            <a href={loginUrl}> Login with spotify</a>
        </div>
    )
}

export default Login
