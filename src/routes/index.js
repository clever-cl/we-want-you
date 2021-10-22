import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from '../views/Home';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path='/' component={Home}/>
        </BrowserRouter>
    )

}