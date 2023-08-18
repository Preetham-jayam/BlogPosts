import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-loading-skeleton/dist/skeleton.css";
import {SkeletonTheme} from 'react-loading-skeleton'
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <SkeletonTheme>
        <App />
      </SkeletonTheme>
    
    </Router>
  </React.StrictMode>
);


