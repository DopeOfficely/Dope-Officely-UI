import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useState} from 'react'
import { data } from './roomData';
import { Room } from '../Room'


const RoomSelector = () => {
  const [room, setRoom] = useState({id: null})
  return (
    <>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {
        data.map((d) => (<Button onClick={() => setRoom(d)} key={d.id}>{d.name}</Button>))
      }

    </ButtonGroup>

    <Room room={room} />
    </>

  )
}

export { RoomSelector }
