import './actionbar.scss';

export function ActionBar(props) {
  return (
    <footer className="bottom-fab">
      <div id="start_stop" className="fab">
        <button className="fab__play" onClick={props.handleFabClick}>
          {props.timerIsRunning ? <span className="material-icons">pause</span>: <span className="material-icons">play_arrow</span>}
        </button>
      </div>
    </footer>
  );
}