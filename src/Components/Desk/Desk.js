import Button from '@mui/material/Button';

const Desk = ({name, bookedBy}) => {
  return (
    <Button color='secondary'>
      <p>{name}</p>
      <p>{bookedBy}</p>
    </Button>
  )
}

export { Desk }
