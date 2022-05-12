import { Container, Box, ButtonGroup } from '@mui/material'
import { MINT } from '../utils/colours'
import { Desk } from './Desk/Desk'
import { desks } from './Desk/deskData'

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  gridColumnGap: '8px',
  gridRowGap: '8px',
}
const Room = ({room}) => {
	console.log("​Room -> room", room.id)
  return (
    <div>
      { room.id !== null &&
      <Container maxWidth="lg">
        <h1>{room.name}</h1>
        {/* <Box sx={{ bgcolor: MINT, height: '60vh', width: '80vw'}} > */}
          <ButtonGroup variant="contained">
          <div style={style}>
            { desks.map((desk) => <Desk data={desk} key={desk.name}/>) }

          </div>
          </ButtonGroup>
        {/* </Box> */}
      </Container>
    }
    </div>

  )
}


export { Room }
