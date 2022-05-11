import { Container, Box, ButtonGroup } from '@mui/material'
import { MINT } from '../utils/colours'
import { Desk } from './Desk/Desk'
import { desks } from './Desk/deskData'

const Room = ({name}) => {
  return (
    <Container maxWidth="lg">
      <h1>{name}</h1>
      <Box sx={{ bgcolor: MINT, height: '60vh' }} >
        <ButtonGroup variant="contained">
          { desks.map((desk) => <Desk data={desk} key={desk.name}/>) }

        </ButtonGroup>
      </Box>
    </Container>
  )
}

export { Room }
