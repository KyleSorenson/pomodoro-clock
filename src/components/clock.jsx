import { useEffect, useState } from 'react';

import './clock.scss';

import { IconButton } from '@mui/material';
import { Refresh } from '@mui/icons-material';

export function Clock({ timer, start, isRunning, handleReset, resetId, toggleTimer }) {

  const defaultValue = start * 60;
  const tick = 1000;
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Initialize timer on pageload, when start changes, or the clock is reset
  useEffect(()=> {
    setTimeRemaining(defaultValue);
  },[start, resetId])


  const formatForTimer = (seconds) => {
    let s = seconds % 60;
    let m = Math.floor(seconds / 60);
    s = s < 10 ? '0' + s : s;
    m = m < 10 ? '0' + m : m;
    return `${m}:${s}`
  }


  const countdownTimer = () => {
    if (isRunning) {

      let timer = setInterval(()=> {
        if ( timeRemaining > 0 ) {
          setTimeRemaining(timeRemaining - 1);
        } else if ( timeRemaining === 0 ) {
          // setTimeRemaining(timeRemaining - 1);
          toggleTimer();
        }
      }, tick);

      return () => { 
        clearInterval(timer);
      };

    }
  }


  useEffect(countdownTimer,[timeRemaining, isRunning]);


  return (
    <div className="clock">
      <div id="timer-label" className="clock__label">
        {timer[0].toUpperCase()+timer.slice(1)}
      </div>
      <div id="time-left" className="clock__countdown">
        {formatForTimer(timeRemaining)}
      </div>
      <IconButton
          size="large"
          edge="start"
          color="inherit"
          id="reset" 
          className="clock__reset" 
          onClick={handleReset}
        >
          <Refresh />
        </IconButton>
      {/* <button id="reset" className="clock__reset" onClick={handleReset}>
        <span className="material-icons">refresh</span>
      </button> */}
    </div>
  );
}