import { useEffect, useState } from 'react';

import './clock.scss';

import { Box, Card, Typography } from '@mui/material';

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


  useEffect(countdownTimer,[timeRemaining, isRunning, toggleTimer]);


  return (
    // <div className="clock">
    //   <div id="timer-label" className="clock__label">
    //     {timer[0].toUpperCase()+timer.slice(1)}
    //   </div>
    //   <div id="time-left" className="clock__countdown">
    //     {formatForTimer(timeRemaining)}
    //   </div>
    //   <IconButton
    //       size="large"
    //       edge="start"
    //       color="secondary"
    //       id="reset" 
    //       className="clock__reset" 
    //       onClick={handleReset}
    //     >
    //       <Refresh />
    //     </IconButton>
    //   {/* <button id="reset" className="clock__reset" onClick={handleReset}>
    //     <span className="material-icons">refresh</span>
    //   </button> */}
    // </div>
    <Card 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 0',
      }}
    >
      <Typography 
        variant='h4' 
        id="timer-label" 
        color={timer === 'break' ? 'secondary.light' : 'primary.contrast'} 
        onClick={toggleTimer} 
        sx={{ '&:hover': { cursor: 'pointer' }}}
      >
        {timer[0].toUpperCase()+timer.slice(1)}
      </Typography>
      <Typography 
        variant='h2' 
        id="time-left" 
        color={timer === 'break' ? 'secondary.light' : 'primary.contrast'}
      >
        {formatForTimer(timeRemaining)}
      </Typography>
    </Card>
  );
}