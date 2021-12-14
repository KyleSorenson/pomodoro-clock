import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import { ThemeProvider } from '@mui/material';
import myTheme from './themes/myTheme';

// import { PomodoroApp } from './components/pomodoro.jsx';
import { PomodoroSkeleton } from './components/pomodoroskeleton.jsx'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <PomodoroSkeleton />
      {/* <PomodoroApp /> */}
    </ThemeProvider>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
