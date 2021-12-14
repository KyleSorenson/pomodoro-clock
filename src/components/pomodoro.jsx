
import { useState } from 'react';

import './pomodoro.scss';

import { NavBar } from './navbar.jsx';
import { Clock } from './clock.jsx';
import { Stepper } from './stepper.jsx';
import { ActionBar } from './actionbar.jsx';

import { Tab } from '@mui/material';
import { WatchLater, Settings } from '@mui/icons-material';

export function PomodoroApp(props) {

  // Intitialization
  const defaultSessionTime = 25;
  const defaultBreakTime = 5;

  const [resetId, setResetId] = useState(0);
  const [currentTimer, setCurrentTimer] = useState('session');
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [sessionLength, setSessionLength] = useState(defaultSessionTime);
  const [breakLength, setBreakLength] = useState(defaultBreakTime);

  const reInitialize = () => {
    setResetId(resetId + 1);
    setCurrentTimer('session');
    setTimerIsRunning(false);
    setSessionLength(defaultSessionTime);
    setBreakLength(defaultBreakTime)
  }

  const toggleTimer = () => {
    setResetId(resetId + 1);
    setCurrentTimer(currentTimer === 'session' ? 'break' : 'session');
  }

  // Stepper Operations
  const handleStep = ( timer, stepDirection ) => {
  
    let currentValue = null;
    let setValue = () => {};
    let stepAction = () => {};
    
    const stepUp = init => ++init;
    const stepDown = init => --init;

    if (timer === 'session') { currentValue = sessionLength; setValue = setSessionLength; };
    if (timer === 'break') { currentValue = breakLength; setValue = setBreakLength; };
    if (stepDirection === 'up') { stepAction = stepUp; };
    if (stepDirection === 'down') { stepAction = stepDown; };
  
    // Sets Max and Min Values
    currentValue = currentValue < 2 ? 2 : currentValue;
    currentValue = currentValue > 59 ? 59 : currentValue;

    setValue( stepAction(currentValue) );
  }

  return (
    <div className="App">
      <div className="mobile-container">

        <NavBar>
          <Tab icon={<WatchLater />} aria-label="phone" />
          <Tab icon={<Settings />} aria-label="person" />
        </NavBar>

        <main className="main-body">

          <Clock 
            timer={currentTimer}
            start={currentTimer === 'session' ? sessionLength : breakLength }
            isRunning={timerIsRunning}
            handleReset={reInitialize}
            resetId={resetId}
            toggleTimer={toggleTimer}
          />

          <div className="settings">

          <button onClick={toggleTimer}>Toggle Timer</button>

            <Stepper
              timer={'session'} 
              length={sessionLength} 
              handleIncrement={handleStep.bind(this, 'session', 'up')} 
              handleDecrement={handleStep.bind(this, 'session', 'down')} 
            />
            <Stepper
              timer={'break'} 
              length={breakLength} 
              handleIncrement={handleStep.bind(this, 'break', 'up')} 
              handleDecrement={handleStep.bind(this, 'break', 'down')} 
            />

          </div>

        </main>

        <ActionBar 
          timerIsRunning={timerIsRunning}
          handleFabClick={ () => { setTimerIsRunning(!timerIsRunning) } }
        />

      </div>
    </div>
  );
}