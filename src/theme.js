import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#032541',
            light: '#01b3e4',
            dark: '#00001b',
            contrastText: '#000'
        },
        secondary: {
            main: '#4db6ac',
            light: '#82e9de',
            dark: '#00867d',
            contrastText: '#fff'
        },
    }
});
  
export default theme;
