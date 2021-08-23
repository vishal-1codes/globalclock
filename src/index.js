import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from './SignUp';
import LandingPage from './LandingPage'
import SettingPage from './SettingPage'
import ClientPage from './ClientPage.js'
import DisplayClock from './DisplayClock'
import Routing from './Routing'

ReactDOM.render(
  <BrowserRouter>
    <Routing/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
