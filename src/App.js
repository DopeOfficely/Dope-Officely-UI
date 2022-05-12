import './App.css';
import { RoomSelector } from './Components/RoomSelector/RoomSelector'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GREEN, JANE_BLUE } from './utils/colours';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';


const theme = createTheme({
  palette: {
    primary:{
      main: JANE_BLUE
    },
    secondary: {
      main: GREEN
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  }
});

const App = ({children}) => {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>

          <RoomSelector />

          {children}
        </ThemeProvider>
    </LocalizationProvider>


    </div>
  );
}

export default App;
