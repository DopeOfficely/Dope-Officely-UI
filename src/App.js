import './App.css';
import { Room } from './Components/Room'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useState} from 'react'
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
  const [room, setRoom] = useState('')

  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => setRoom('Mountain')}>Mountain</Button>
          <Button onClick={() => setRoom('City')}>City</Button>
        </ButtonGroup>


        <Room name={room}/>
      </ThemeProvider>

    </div>
  );
}

export default App;
