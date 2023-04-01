import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Form } from 'reactstrap';
import { FormLabel, TextField } from '@mui/material';
import add_country from '../assets/css/add_country.css';
import CountryData from '../CountryData/CountryData.js';
import {useState} from 'react';
import {nanoid} from 'nanoid';

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

  const [addForm, setAddForm] = useState({
    //id : '',
    name : '',
    code: '',
    description: '',
  })

    const handleAddForm = (event) =>{
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue= event.target.value;

      const newFormData = {...addForm};
      newFormData[fieldName] = fieldValue;

      setAddForm(newFormData);
    }

    const handleAddFormSubmit = (event) => {
      event.preventDefault();

      const newContact = {
        id: nanoid,
        name: addForm.name,
        code: addForm.code,
        description: addForm.description,
      };

      const newContacts = [...countries, newContact];
      setCountries(newContacts);
      alert(newContacts);
    }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained"
          sx={{ color: 'white', backgroundColor: 'green', borderColor: 'green',
           marginTop: '30px', marginLeft: '20px' }}
      >Add new country</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1 style={{textAlign: 'center'}}>Add new country</h1>
        <br />
        <div className="formedit" onSubmit={handleAddFormSubmit}>
           <form >
           <TextField id="id" label="Id" variant="outlined"
           onChange={handleAddForm}
            /> 
           
           <TextField id="name" label="Name" variant="outlined" 
            onChange={handleAddForm}

           /> 
           
            <TextField id="code" label="Code" variant="outlined"
           onChange={handleAddForm}            
             /> 
            
            
            <TextField id="description" label="Description" variant="outlined" 
           onChange={handleAddForm}

            />
          <br />
            <Button variant="contained" type='submit' >Submit</Button>
        <Button variant="contained" style={{marginLeft: '10px'}} onClick={handleClose}>Cancel</Button>
           </form>
        
        </div>
        </Box>
      </Modal>
    </div>
  );
}