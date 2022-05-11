import { Container, Box, ButtonGroup } from '@mui/material'
import { MINT } from '../utils/colours'
import { Desk } from './Desk/Desk'
import { desks } from './Desk/deskData'

const Room = ({room}) => {
	console.log("​Room -> room", room.id)
  return (
    <div>
      { room.id !== null &&
      <Container maxWidth="lg">
        <h1>{room.name}</h1>
        <Box sx={{ bgcolor: MINT, height: '60vh', width: '80vw'}} >
          <ButtonGroup variant="contained">
            { desks.map((desk) => <Desk data={desk} key={desk.name}/>) }

          </ButtonGroup>
        </Box>
      </Container>
    }
    </div>

  )
}


export { Room }
