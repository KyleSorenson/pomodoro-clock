import { useEffect, useState } from 'react';

import './pomodoro.scss';

import { NavBar } from './navbar.jsx';
import { Clock } from './clock.jsx';
import { Stepper } from './stepper.jsx';
import { ActionBar } from './actionbar.jsx';

export function PomodoroApp(props) {

  // Intitialization
  const defaultSessionTime = 25;
  const defaultBreakTime = 5;

  const [sessionLength, setSessionLength] = useState(defaultSessionTime);
  const [breakLength, setBreakLength] = useState(defaultBreakTime);
  const [currentTimer, setCurrentTimer] = useState('session');
  // const [timeRemaining, setTimeRemaining] = useState(defaultSessionTime * 60);
  const [timerIsRunning, setTimerIsRunning] = useState(false);


  // Stepper Operations
  const handleStep = (timer, stepDirection, e) => {
  
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
          <div className="tabs-clock"><span className="material-icons">watch_later</span></div>
          <div className="tabs-settings"><span className="material-icons">settings</span></div>
        </NavBar>

        <main className="main-body">

          <Clock 
            timer={currentTimer}
            start={sessionLength} 
            // start={currentTimer === 'session' ? sessionLength : breakLength }
            isRunning={timerIsRunning}
          />

          <div className="settings">

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