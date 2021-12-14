import { createTheme } from "@mui/material";
import { blueGrey, deepOrange } from "@mui/material/colors";

const myTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: blueGrey,
    secondary: deepOrange,
  },
  typography: {
    h2: {
      fontSize: '5rem',
    },
    h4: {
      fontWeight: '200',
    },
  },
});


export default myTheme;