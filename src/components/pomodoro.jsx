import { useState } from "react";

import { 

  Box,
  Card,
  Container,
  CssBaseline,
  Divider,
  Fab,
  List,
  Stack,
  // Tab,

} from "@mui/material";

import {

  PlayArrow,
  Pause,
  Refresh,
  // Settings,
  // WatchLater,

} from "@mui/icons-material"

// import { NavBar } from './navbar';
import { Clock } from './clock';
import { Stepper } from './stepper';
import { ActionBar } from './actionbar';

export function PomodoroClock() {

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
    <>
      <CssBaseline />

      {/* <NavBar>
        <Tab icon={<WatchLater />} sx={{ height: '64px', flexGrow: '1' }} />
        <Tab icon={<Settings />} sx={{ height: '64px', flexGrow: '1' }} />
      </NavBar> */}
      
      <main>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>

            <Stack spacing={2} divider={<Divider />}>

              <Clock 
                timer={currentTimer}
                start={currentTimer === 'session' ? sessionLength : breakLength }
                isRunning={timerIsRunning}
                handleReset={reInitialize}
                resetId={resetId}
                toggleTimer={toggleTimer}
              />

              <Card 
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <List sx={{ width: '100%' }}>

                  <Stepper
                    timer={'session'} 
                    length={sessionLength} 
                    handleIncrement={handleStep.bind(this, 'session', 'up')} 
                    handleDecrement={handleStep.bind(this, 'session', 'down')} 
                  />
                  <Divider />
                  <Stepper
                    timer={'break'} 
                    length={breakLength} 
                    handleIncrement={handleStep.bind(this, 'break', 'up')} 
                    handleDecrement={handleStep.bind(this, 'break', 'down')} 
                  />

                </List>
              </Card>
            </Stack>            
          </Container>
        </Box>
      </main>
      
      <ActionBar>
        <Fab color='secondary' sx={{ margin: '0 6px'}} id="start_stop" onClick={() => { setTimerIsRunning(!timerIsRunning)}}>
          {timerIsRunning ? <Pause /> : <PlayArrow />}
        </Fab>
        <Fab color='primary' sx={{ margin: '0 6px'}} id="reset" onClick={reInitialize}>
          <Refresh />
        </Fab>
      </ActionBar>
    </>
  )
}