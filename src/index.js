import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { PomodoroApp } from './components/pomodoro.jsx';

ReactDOM.render(
  <React.StrictMode>
    <PomodoroApp />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
