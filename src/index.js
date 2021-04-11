import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {ThemeProvider} from './context/themeContext'
import {CursorProvider} from './context/cursorContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CursorProvider>
        <App />
      </CursorProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
