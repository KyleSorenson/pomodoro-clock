import './actionbar.scss';
import { AppBar, Box, Fab, Toolbar } from '@mui/material';
import { PlayArrow, Pause, Refresh } from '@mui/icons-material';

export function ActionBar({ children, timerIsRunning, handleFabClick }) {
  return (
    // <footer className="bottom-fab">
    //   <div id="start_stop" className="fab">
    //     <Fab color="secondary" aria-label="play" onClick={handleFabClick}>
    //       {timerIsRunning ? <Pause /> : <PlayArrow />}
    //     </Fab>
    //     {/* <button className="fab__play" onClick={handleFabClick}>
    //       {timerIsRunning ? <span className="material-icons">pause</span>: <span className="material-icons">play_arrow</span>}
    //     </button> */}
    //   </div>
    // </footer>
    <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Box sx={{ 
          width: '136px',
          position: 'absolute',
          zIndex: 1,
          top: -30,
          left: 0,
          right: 0,
          margin: '0 auto',
        }}>
          {/* <Fab color='secondary' sx={{ margin: '0 6px'}} id="start_stop">
            <PlayArrow />
          </Fab>
          <Fab color='primary' sx={{ margin: '0 6px'}} id="reset">
            <Refresh />
          </Fab> */}
          { children }
        </Box>
      </Toolbar>
    </AppBar>
  );
}