import './stepper.scss';

import { IconButton, ListItem, ListItemText } from '@mui/material';
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material';

export function Stepper({ timer, length, handleIncrement, handleDecrement }) {

  return (
    <ListItem
      secondaryAction={
        <div className="settings__stepper">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            id={`${timer}-decrement`} 
            className='stepper__decrementer' 
            onClick={handleDecrement}
          >
            <RemoveCircleOutline />
          </IconButton>
          <div id={`${timer}-length`} className='stepper__number'>
            {length}
          </div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            id={`${timer}-increment`} 
            className='stepper__incrementer' 
            onClick={handleIncrement}
          >
            <AddCircleOutline />
          </IconButton>
        </div>
      }
    >
      <ListItemText
        primary={timer + ' length'}
      />
    </ListItem>
  );
}