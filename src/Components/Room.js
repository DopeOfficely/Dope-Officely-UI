import { Container, Box } from '@mui/material'
import { MINT } from '../utils/colours'
import { Desk } from './Desk/Desk'
import { desks } from './Desk/deskData'

const Room = ({name}) => {
  return (
    <Container maxWidth="lg">
      <h1>{name}</h1>
      <Box sx={{ bgcolor: MINT, height: '60vh' }} >
        { desks.map((desk) => <Desk name={desk.name} bookedBy={desk.bookedBy}/>) }
      </Box>
    </Container>
  )
}

export { Room }
