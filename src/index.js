import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import { ThemeProvider } from '@mui/material';
import myTheme from './themes/myTheme';

import { PomodoroApp } from './components/pomodoro.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <PomodoroApp />
    </ThemeProvider>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
