import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Imports your landing page component
import './index.css';         // Imports the Tailwind CSS output

// This initializes the React application and mounts it to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
