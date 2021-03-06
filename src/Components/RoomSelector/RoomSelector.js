import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useState} from 'react'
import { data } from './roomData';
import { Room } from '../Room'
const axios = require('axios');



const RoomSelector = () => {
  const [roomData, setRoomData] = useState([])
  axios.get('/rooms')
  .then(function (response) {
    setRoomData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
  });
  const [room, setRoom] = useState({id: null})
  return (
    <>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {
        roomData.map((d) => (<Button onClick={() => setRoom(d)} key={d.id}>{d.name}</Button>))
      }

    </ButtonGroup>
    { room.id &&
      <Room room={room} />

    }
    </>

  )
}

export { RoomSelector }
