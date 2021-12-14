import './stepper.scss';

import { IconButton, ListItem, ListItemText, Stack } from '@mui/material';
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material';

export function Stepper({ timer, length, handleIncrement, handleDecrement }) {

  return (
    // <ListItem
    //   secondaryAction={
    //     <div className="settings__stepper">
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="secondary"
    //         id={`${timer}-decrement`} 
    //         className='stepper__decrementer' 
    //         onClick={handleDecrement}
    //       >
    //         <RemoveCircleOutline />
    //       </IconButton>
    //       <div id={`${timer}-length`} className='stepper__number'>
    //         {length}
    //       </div>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="secondary"
    //         id={`${timer}-increment`} 
    //         className='stepper__incrementer' 
    //         onClick={handleIncrement}
    //       >
    //         <AddCircleOutline />
    //       </IconButton>
    //     </div>
    //   }
    // >
    //   <ListItemText
    //     primary={timer + ' length'}
    //   />
    // </ListItem>
    <ListItem
      secondaryAction={
        <Stack direction="row">
          <IconButton
            size="large"
            color="secondary"
            id={`${timer}-decrement`}
            onClick={handleDecrement}
          >
            <RemoveCircleOutline />
          </IconButton>
          <div style={{ padding: '12px 0'}} id={`${timer}-length`}>
            {length}
          </div>
          <IconButton
            size="large"
            color="secondary"
            id={`${timer}-increment`} 
            onClick={handleIncrement}
          >
            <AddCircleOutline />
          </IconButton>
        </Stack>
      }
    >
      <ListItemText
        primary={timer[0].toUpperCase() + timer.slice(1) + ' Length'}
        id={`${timer}-label`} 
      />
    </ListItem>
  );
}