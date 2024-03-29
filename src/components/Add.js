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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

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

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [countries, setContries] = useState(CountryData);



  // const[name, setNameCountry] = useState("");
  // const[code, setCodeCountry] = useState("");
  // const[description, setDesCountry] = useState("");

  // console.log(nameCountry);
  // console.log(codeCountry);
  // console.log(desCountry);

  //xác định trạng thái ban đầu
  const formik = useFormik({
    initialValues:{
        name:"",
        code: "",
        description : "" 
    },
//yup
    validationSchema: Yup.object({
      name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("required"),

      code: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("required"),

      description: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("required")
    }),
    //onSubmit: (values) => {
    
    onSubmit: (values) => {
console.log(values);
     }
  
  });


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
        <div className="formedit" onSubmit={''}>
           <form onSubmit={formik.handleSubmit} >

                  <TextField 
                      id = "name"
                      name = "name"
                      label="Name" 
                      variant="outlined"
                      // onChange={(e)=>setNameCountry(e.target.value)}
                      onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      value = {formik.values.name}
                      // value = {nameCountry}
                      
                  /> 
                { formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}

                  <TextField 
                      id = "code"
                      name = 'code'
                      label="Code" 
                      variant="outlined"
                      onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      value = {formik.values.code}     
                  /> 
                {formik.touched.code && formik.errors.code ? <p>{formik.errors.code}</p> : null}



                  <TextField 
                      id = "description"
                      name="description" 
                      label="Description" 
                      variant="outlined" 
                      onChange={formik.handleChange}
                      // onBlur={formik.handleBlur} lưu giữ vị trí
                      value = {formik.values.description}
                      // onChange={onChangeNewDes}
                      // value={NewDes}
                      // value={formData.description}
                  />
                {formik.touched.description && formik.errors.description ? <p>{formik.errors.description}</p> : null}


                {/* {formik.errors.description && formik.touched.description
                 && (<p style={{fontSize :"0.5px"}}>{formik.errors.name}</p>)} */}

          <br />
            <Button variant="contained"  type="submit" >Submit</Button>
        <Button variant="contained" style={{marginLeft: '10px'}} onClick={handleClose}>Cancel</Button>
           </form>
        
        </div>
        </Box>
      </Modal>
    </div>
  );
}
export default Add;