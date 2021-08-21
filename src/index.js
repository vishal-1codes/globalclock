import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './LandingPage.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from './SignUp';
import LandingPage from './LandingPage'
import SettingPage from './SettingPage'
import ClientPage from './ClientPage.js'
import DisplayClock from './DisplayClock'

ReactDOM.render(
  <React.StrictMode>
    <SettingPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
