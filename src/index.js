import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider } from '@mui/material';
import myTheme from './themes/myTheme';

import { PomodoroClock } from './components/pomodoro.jsx'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <PomodoroClock />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
