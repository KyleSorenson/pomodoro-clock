import './stepper.scss';

export function Stepper(props) {

  return (
    <div className="settings__list-item">
      <div id="session-label" className="settings__list-title">
        {props.timer + ' length'}
      </div>
      <div className="settings__stepper">
        <button 
          id={`"${props.timer}-decrement"`} 
          className='stepper__decrementer' 
          onClick={props.handleDecrement}
        >
          <span className="material-icons">remove_circle_outline</span>
        </button>
        <div id={`"${props.timer}-length"`} className='stepper__number'>
          {props.length}
        </div>
        <button 
          id={`"${props.timer}-increment"`} 
          className='stepper__incrementer' 
          onClick={props.handleIncrement}
        >
          <span className="material-icons">add_circle_outline</span>
        </button>
      </div>
    </div>
  );
}