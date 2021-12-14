import './actionbar.scss';
import { Fab } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

export function ActionBar({ timerIsRunning, handleFabClick }) {
  return (
    <footer className="bottom-fab">
      <div id="start_stop" className="fab">
        <Fab color="secondary" aria-label="play" onClick={handleFabClick}>
          {timerIsRunning ? <Pause /> : <PlayArrow />}
        </Fab>
        {/* <button className="fab__play" onClick={handleFabClick}>
          {timerIsRunning ? <span className="material-icons">pause</span>: <span className="material-icons">play_arrow</span>}
        </button> */}
      </div>
    </footer>
  );
}