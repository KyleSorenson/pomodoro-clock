import './navbar.scss';

import { Toolbar, AppBar, Tabs } from '@mui/material';

export function NavBar({ children }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs>
          {children}
          {/* <header className="tabs">
            {children}
          </header> */}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}