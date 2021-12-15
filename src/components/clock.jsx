import { useEffect, useState } from 'react';

import { Card, Typography } from '@mui/material';


export function Clock({ timer, start, isRunning, resetId, toggleTimer, playAlarm }) {

  const defaultValue = start * 60;
  const tick = 1000;
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Initialize timer on pageload, when start changes, or the clock is reset
  useEffect(()=> {
    setTimeRemaining(defaultValue);
  },[start, resetId, defaultValue])


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
          toggleTimer();
          playAlarm();
        }
      }, tick);

      return () => { 
        clearInterval(timer);
      };

    }
  }


  useEffect(countdownTimer,[timeRemaining, isRunning, toggleTimer, playAlarm]);


  return (
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