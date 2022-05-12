import { Container, Box, ButtonGroup } from '@mui/material'
import { MINT } from '../utils/colours'
import { Desk } from './Desk/Desk'
import { desks } from './Desk/deskData'

import { useState } from 'react'

const axios = require('axios');

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  gridColumnGap: '8px',
  gridRowGap: '8px',
}


const Room = ({room}) => {
	console.log("​Room -> room", room)
  const [deskData, setDeskData] = useState([])
	console.log("​Room -> deskData", deskData)
  const date = '2022-05-11'
  axios.get(`/rooms/${room.id}`)
  .then(function (response) {
    setDeskData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function (response) {

  });
  return (
    <div>
      { room.id !== null &&
      <Container maxWidth="lg">
        <h1>{room.name}</h1>
        {/* <Box sx={{ bgcolor: MINT, height: '60vh', width: '80vw'}} > */}
          <ButtonGroup variant="contained">
          { deskData &&
            <div style={style}>
              { deskData.map((desk) => <Desk data={desk} key={desk.id}/>) }

            </div>
          }

          </ButtonGroup>
        {/* </Box> */}
      </Container>
    }
    </div>

  )
}


export { Room }
