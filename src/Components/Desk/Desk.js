import Box from '@mui/material/Box';
import React from 'react'
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
            Desk: {data.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.description}
          </Typography>
          { data.booked &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Your colleague {data.bookedBy} has booked this desk
            </Typography>
          }
          {!data.booked &&
            <BookingModal desk={data}/>
          }
        </Box>
      </Modal>
    </>

  )
}

const BookingModal = ({desk}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Book it</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">
            Book desk {desk.name}
          </h2>
          <Button onClick={handleClose}>Book</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export { Desk }
