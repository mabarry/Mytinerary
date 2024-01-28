import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EditOptions from './EditOptions'
import reportWebVitals from './reportWebVitals';
import LandingPage from "./LandingPage"
import ItineraryPage from './ItineraryPage';
import Schedule from './components/schedule';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Schedule/>
=======
    <EditOptions />
>>>>>>> 3a95329979691a9d921120a59d4066a60e4398f2
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
