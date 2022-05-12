import Box from '@mui/material/Box';
import React from 'react'
import Button from '@mui/material/Button';
import {useState} from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {DatePicker} from '@mui/x-date-pickers/DatePicker'

import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import startOfTomorrow from 'date-fns/startOfTomorrow'
import format from 'date-fns/format'



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
  const [dateValue, setDateValue] = React.useState(startOfTomorrow());

  const [userName, setUserName] = React.useState('');

  const handleUserChange = (event) => {
    setUserName(event.target.value)
  }

  const bookDesk = () => {
    console.log( "USER: ", userName, "DATE: ", format(dateValue, 'yyyy/MM/dd' ))
    handleClose()
  }


  const colourPicker = () => {
    let type = ''
    if ( !data.available){
      return data.booked ? 'primary' : 'neutral'
    } else {return type = 'secondary' }
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
            Book Desk {data.name}
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
            // <BookingModal desk={data}/>
            <React.Fragment>
              <br/>
              <TextField id="user-input" label="Name" variant="filled" value={userName} onChange={handleUserChange} />
                {/* <Input
                  id="userName"
                  value={userName}
                  onChange={handleUserChange}
                  aria-describedby="component-helper-text"
                /> */}
              {/* </TextField> */}
              <br />
              <DatePicker
                label="Booking Date"
                value={dateValue}
                onChange={(newValue) => {
                  setDateValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br/>

              <Button onClick={bookDesk}>Book</Button>
            </React.Fragment>
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
  const [value, setValue] = React.useState(startOfTomorrow());


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
          <DatePicker
            label="Booking Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button onClick={handleClose}>Book</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export { Desk }
