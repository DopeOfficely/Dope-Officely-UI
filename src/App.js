import './App.css';
import { RoomSelector } from './Components/RoomSelector/RoomSelector'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GREEN, JANE_BLUE } from './utils/colours';

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

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <RoomSelector />

      </ThemeProvider>

    </div>
  );
}

export default App;
