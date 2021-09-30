import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateProvider from './assets/StateProvider';
import reducer, { initialState } from './assets/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState} >
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


