import { useEffect, useState } from 'react';

import './clock.scss';

export function Clock(props) {

  const defaultValue = props.start * 60;
  const [timeRemaining, setTimeRemaining] = useState(defaultValue);

  const formatForTimer = (seconds) => {
    let s = seconds % 60;
    let m = Math.floor(seconds / 60);
    s = s < 10 ? '0' + s : s;
    m = m < 10 ? '0' + m : m;
    return `${m}:${s}`
  }


  const countdownTimer = () => {
    if (props.isRunning) {

      let timer = setInterval(()=> {
        if ( timeRemaining > 0 ) {
          setTimeRemaining(timeRemaining - 1)
        }    
      }, 1000);

      return () => { 
        clearInterval(timer);
      };

    }
  }


  useEffect(countdownTimer,[timeRemaining, props.isRunning]);


  return (
    <div className="clock">
      <div id="timer-label" className="clock__label">
        {props.timer[0].toUpperCase()+props.timer.slice(1)}
      </div>
      <div id="time-left" className="clock__countdown">
        {formatForTimer(timeRemaining)}
      </div>
      <button id="reset" className="clock__reset" onClick={()=>{}}>
        <span className="material-icons">refresh</span>
      </button>
    </div>
  );
}