import { useState } from "react";

import { 

  Box,
  Card,
  Container,
  CssBaseline,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  Fab,
  Link,
  List,
  Stack,
  // Typography,
  // Tab,

} from "@mui/material";

import {

  PlayArrow,
  Pause,
  Refresh,
  // Settings,
  // WatchLater,

} from "@mui/icons-material"

import { NavBar } from './navbar';
import { Clock } from './clock';
import { Stepper } from './stepper';
import { ActionBar } from './actionbar';

const projectLink = 'https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock';
const curriculumLink = 'https://www.freecodecamp.org/learn/front-end-development-libraries';

export function PomodoroClock() {

  // Intitialization
  const defaultSessionTime = 25;
  const defaultBreakTime = 5;

  const [resetId, setResetId] = useState(0);
  const [currentTimer, setCurrentTimer] = useState('session');
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [sessionLength, setSessionLength] = useState(defaultSessionTime);
  const [breakLength, setBreakLength] = useState(defaultBreakTime);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const reInitialize = () => {
    setResetId(resetId + 1);
    setCurrentTimer('session');
    setTimerIsRunning(false);
    setSessionLength(defaultSessionTime);
    setBreakLength(defaultBreakTime);
    stopAlarm();
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

  // Dialog Box
  const openDialog = () => {
    setDialogIsOpen(true);
  }

  const closeDialog = () => {
    setDialogIsOpen(false);
  };

  // Audio Playback
  const playAlarm = () => {
    document.getElementById('beep').play();
  }
  const stopAlarm = () => {
    document.getElementById('beep').pause();
    document.getElementById('beep').load();
  }

  return (
    <div style={{ 
      'display': 'flex', 
      'flexDirection': 'column', 
      'height': '100vh'
    }} >
      <CssBaseline />

      <NavBar openDialog={openDialog}>
        {/* <Tab icon={<WatchLater />} sx={{ height: '64px', flexGrow: '1' }} />
        <Tab icon={<Settings />} sx={{ height: '64px', flexGrow: '1' }} /> */}
      </NavBar>
      
      <main style={{ 'flex-grow': '1' }}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          // sx={{
          //   pt: 8,
          //   pb: 6,
          // }}
        >
          <Container maxWidth='sm'>

            <Stack spacing={2} divider={<Divider />} >

              <Clock 
                timer={currentTimer}
                start={currentTimer === 'session' ? sessionLength : breakLength }
                isRunning={timerIsRunning}
                handleReset={reInitialize}
                resetId={resetId}
                toggleTimer={toggleTimer}
                playAlarm={playAlarm}
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

      <Dialog
        open={dialogIsOpen}
        onClose={closeDialog}
      >
        <DialogContent>
          <DialogContentText sx={{ textAlign: 'center'}}>
            <p>
              <Link href={projectLink} color='secondary' target="_blank" rel="noopener">Project 5</Link> from <br/> 
              <Link href={curriculumLink} color='secondary' target="_blank" rel="noopener">Free Code Camp's Front End Development Libraries Curriculum</Link>.
            </p>
            <p>
              More information on the Pomodoro Technique <Link href="https://en.wikipedia.org/wiki/Pomodoro_Technique" color='secondary' target="_blank" rel="noopener">here</Link>.
            </p>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      

    </div>
  )
}