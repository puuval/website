import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './fonts/SIMPLIFICA.ttf';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/*
Dark theme palette for MUI elements
NOT IN USE
*/
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
 <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
</React.StrictMode>
)
