import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheet/styles.css';
import App from './App';
import Navbar  from './components/Navbar';
import profileIMG from '../src/images/sonnenbild.jpg';
import "bootstrap-icons/font/bootstrap-icons.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar profileImage={profileIMG}/>
    <App />
  </React.StrictMode>
);