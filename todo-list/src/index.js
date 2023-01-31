import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main">
        <div className="title">Things to do</div>
        <App />
    </div>
      
    
  </React.StrictMode>
);
