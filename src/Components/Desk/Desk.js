import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import {useState} from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Desk = ({data}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const colourPicker = () => {
    let type = ''
    if ( !data.available){
      return data.booked ? 'primary' : 'neutral'
    } else {return type = 'secondary' }
  }

  const bookDesk = () => {
    console.log("DESK BOOKED")
  }

  return (
    <>
      <Button color={colourPicker()} onClick={handleOpen} >{data.name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.description}
          </Typography>
          <Button color='primary' onClick={bookDesk} >Book Desk</Button>
        </Box>
      </Modal>
    </>

  )
}

export { Desk }
