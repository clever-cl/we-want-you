import React from 'react';
import ReactDOM from 'react-dom';
import { DataLayer } from './helpers/DataLayer'
import App from './App';
import './styles/index.css'
import reducer, { initialState } from './helpers/reducer'

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,
  document.getElementById('root')
);

