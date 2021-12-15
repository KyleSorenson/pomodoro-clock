import { AppBar, Box, Toolbar } from '@mui/material';


export function ActionBar({ children, timerIsRunning, handleFabClick }) {
  return (
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
          { children }
        </Box>
      </Toolbar>
    </AppBar>
  );
}