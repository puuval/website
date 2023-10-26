import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the root DOM node to mount the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the React application
root.render(
  <React.StrictMode>
    {/* Main App component */}
    <App />
  </React.StrictMode>
);