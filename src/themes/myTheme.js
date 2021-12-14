import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

const myTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#607D8B',
      dark: '#263238'
    },
    secondary: {
      light: '#FF8A65',
      main: '#FF5722'
    }
  }
});

export default myTheme;