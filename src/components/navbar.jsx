// import { useState } from 'react';
import './navbar.scss';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Info } from "@mui/icons-material"

export function NavBar({ openDialog }) {

  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <AppBar position='absolute'>
      <Container maxWidth='sm'>
        <Toolbar sx={{ maxWidth: 'sm', justifyContent: 'center' }} disableGutters="true">
          <Typography variant='h6'>Pomodoro (25 + 1) Clock</Typography>
          <IconButton
            size="large"
            onClick={openDialog}
          >
            <Info />
          </IconButton>
          {/* <Tabs value={value} onChange={handleChange} sx={{ width: '100%', p: 0 }}>
            { children }
          </Tabs> */}
        </Toolbar>
    </Container>
  </AppBar>
  );
}