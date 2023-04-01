import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import CountryData from '../CountryData/CountryData';
import Country from '../pages/Country'


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

export default function Delete({ data , countries, setCountries }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //delete
  // const [formData, setFormData] = useState([]);

  // const handleDelete = (name) => {
  //   const updatedFormData = formData.filter((CountryData) => CountryData.name !== name);
  //   setFormData(updatedFormData);
  // };

  //delete

  const handleDelete = id => {
    const updateContries = countries.filter(country => country.id !== id);
      setCountries(updateContries);
  //  console.log(updateContries);
      
  };


  return (
    <div>
    {/* onClick={handleOpen} */}
      <Button onClick={handleOpen}
      
       variant = "outlined" 
      sx={{ color: 'white', backgroundColor: 'red', borderColor: 'red' }} >Delete</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1 style={{textAlign: 'center'}}>Are you sure?</h1>
          </Typography>
{/* onClick={handleDelete} */}
          <Button variant="contained" onClick={() => handleDelete(data.id)} 
          style={{marginLeft: '70px', marginTop: '20px'}}
          >
            Delete
          </Button>
          
          <Button variant="contained" style={{marginLeft: '20px', marginTop: '20px'}} onClick={handleClose} >Cancel</Button>
          {/* onClick={() => handleDelete(item.name)} */}
        </Box>
      </Modal>
    </div>
  );
}