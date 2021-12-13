import { useEffect, useState } from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './App.scss';

function Clock (props) {
  return (
    <div id="time-left" className="clock__countdown">{props.display}</div>
  );
}

function App() {
  
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(25*60);
  
  const stepUp = init => ++init;
  const stepDown = init => init > 0 ? --init : 0;

  const handleStep = (counter, stepDirection, e) => {

    let currentValue = null;
    let setValue = () => {};
    let stepAction = () => {};
    
    if (counter === 'session') { currentValue = sessionLength; setValue = setSessionLength; };
    if (counter === 'break') { currentValue = breakLength; setValue = setBreakLength; };
    if (stepDirection === 'up') { stepAction = stepUp };
    if (stepDirection === 'down') { stepAction = stepDown };
  
    setValue( stepAction(currentValue) );
  
  }

  const formatForTimer = (seconds) => {
    let s = seconds % 60;
    let m = Math.floor(seconds / 60);
    s = s < 10 ? '0' + s : s;
    return `${m}:${s}`
  }

  useEffect(() => {
    let timer = setInterval(()=> {
      setTimeRemaining(stepDown(timeRemaining))
    }, 1000);
    return () => clearInterval(timer);
  },[timeRemaining]);
  
  return (
    <div className="App">
      <div className="mobile-container">
        <header className="tabs">
          <div className="tabs-clock"><span className="material-icons">watch_later</span></div>
          <div className="tabs-settings"><span className="material-icons">settings</span></div>
        </header>
        <main className="main-body">
          <div className="clock">
            <div id="timer-label" className="clock__label">Session</div>
            <Clock display={formatForTimer(timeRemaining)}/>
            <div id="reset" className="clock__reset"><span className="material-icons">refresh</span></div>
          </div>
          <div className="settings">
            <div className="settings__list-item">
              <div id="session-label" className="settings__list-title">Session Length</div>
              <div className="settings__stepper">
                <button id="session-decrement" className='stepper__decrementer' onClick={handleStep.bind(this, 'session', 'down')}><span className="material-icons">remove_circle_outline</span></button>
                <div id="session-length" className='stepper__number'>{sessionLength}</div>
                <button id="session-increment" className='stepper__incrementer' onClick={handleStep.bind(this, 'session', 'up')}><span className="material-icons">add_circle_outline</span></button>
              </div>
            </div>
            <div className="settings__list-item">
              <div id="break-label" className="settings__list-title">Break Length</div>
              <div className="settings__stepper">
                <button id="break-decrement" className='stepper__decrementer' onClick={handleStep.bind(this, 'break', 'down')}><span className="material-icons">remove_circle_outline</span></button>
                <div id="break-length" className='stepper__number'>{breakLength}</div>
                <button id="break-increment" className='stepper__incrementer' onClick={handleStep.bind(this, 'break', 'up')}><span className="material-icons">add_circle_outline</span></button>
              </div>
            </div>
          </div>
        </main>
        <footer className="bottom-fab">
          <div id="start_stop" className="fab"><span className="material-icons">play_arrow</span><span className="material-icons">play_circle</span><span className="material-icons">pause</span></div>
        </footer>
      </div>
    </div>
  );
}

export default App;
