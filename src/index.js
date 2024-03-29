import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navigation/Navigation.css';
import './App.css';
import './Home/Home.css';
import './Footer.css';
import './Pages/Pages.css';
import './Pages/SimpleSlider.css'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App />
  
 
  </React.StrictMode>
);


