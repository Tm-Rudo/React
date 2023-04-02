import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { Form } from 'reactstrap';
import { FormLabel, TextField } from '@mui/material';
// import add_country from '../assets/css/add_country.css';
import CountryData from '../CountryData/CountryData';
import { Input } from '@mui/material';
import { useFormik } from 'formik';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Edit({ data , countries, setCountries }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    

const handEdit = id =>{
      const test = countries.filter(country => country.id === id);
      console.log(test);


};


// e => onPressEdittingRow(data.id)
  return (
    <div>
      <Button variant="contained" 
        onClick={  handleOpen} >
      
          Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1 style={{textAlign: 'center'}}>Edit country</h1>
        <br />
        <div className="formedit">
           <form >


            <TextField 
                id = "nameCountry"
                name = "nameCountry"
                label="Name" 
                variant="outlined"


             /> 
            <TextField 
                id = "codeCountry"
                name = 'codeCountry'
                label="Code" 
                variant="outlined"

             /> 
            <TextField 
                id = "desCountry"
                name="desCountry" 
                label="Description" 
                variant="outlined" 

                // onChange={onChangeNewDes}
                // value={NewDes}
                // value={formData.description}
            />
          <br />
            <Button variant="contained" style={{}} onClick = {() => handEdit(data.id)}>Submit</Button>
        <Button variant="contained" style={{marginLeft: '10px'}} onClick={handleClose}>Cancel</Button>
           </form>
        
        </div>
        
{/* <br /> */}

        </Box>
      </Modal>
    </div>
  );
}