import './stepper.scss';

export function Stepper({ timer, length, handleIncrement, handleDecrement }) {

  return (
    <div className="settings__list-item">
      <div id={`${timer}-label`} className="settings__list-title">
        {timer + ' length'}
      </div>
      <div className="settings__stepper">
        <button 
          id={`${timer}-decrement`} 
          className='stepper__decrementer' 
          onClick={handleDecrement}
        >
          <span className="material-icons">remove_circle_outline</span>
        </button>
        <div id={`${timer}-length`} className='stepper__number'>
          {length}
        </div>
        <button 
          id={`${timer}-increment`} 
          className='stepper__incrementer' 
          onClick={handleIncrement}
        >
          <span className="material-icons">add_circle_outline</span>
        </button>
      </div>
    </div>
  );
}