import { useState } from 'react';
import './navbar.scss';
import { AppBar, Container, Tabs, Toolbar } from '@mui/material';


export function NavBar({ children }) {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position='relative'>
    <Container maxWidth='sm'>
        <Toolbar sx={{ maxWidth: 'sm' }} disableGutters="true">
          <Tabs value={value} onChange={handleChange} sx={{ width: '100%', p: 0 }}>
            { children }
          </Tabs>
        </Toolbar>
    </Container>
  </AppBar>
  );
}