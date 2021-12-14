import './actionbar.scss';

export function ActionBar({ timerIsRunning, handleFabClick }) {
  return (
    <footer className="bottom-fab">
      <div id="start_stop" className="fab">
        <button className="fab__play" onClick={handleFabClick}>
          {timerIsRunning ? <span className="material-icons">pause</span>: <span className="material-icons">play_arrow</span>}
        </button>
      </div>
    </footer>
  );
}