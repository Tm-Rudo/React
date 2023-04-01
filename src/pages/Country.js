import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import CountryData from '../CountryData/CountryData.js';
import { Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Delete from '../components/Delete.js';
import Add from '../components/Add.js';
import Edit from '../components/Edit.js';



function Country(props) {
  // const [id, setId] = useState(1);
  // const addId= () =>{
  //   setId(id+1);
  // }
//   const [textInput, setTextInput] = useState("");

//   const [CountryDatas , setCountryData] = useState(CountryData);
//   const [Delete_Country, setDelete_Country] = useState(false);

//   const [show, setShow] = useState(false);
//   const [showedit, setShowedit] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleEdit = () => setShowedit(false);

//   const handleShow = () => setShow(true);
//   const handleShowEdit = () => setShowedit(true);
  
const [countries, setContries] = useState(CountryData);

return (
       
 <div className="table">

      {/* <Button color='success' className='btx-add-cts'>Add new Country</Button> */}
      <Add/>
      <br /> <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>ID</th>
              <th>Name</th>
              <th>Code</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(s => (
              <tr key={s.id}>
                  <td>{s.id}</td>

                  <td>{s.name}</td>
                  <td>{s.code}</td>
                  <td>{s.description}</td>
                  <td>
                    <Edit data={s} setCou countries= {countries} setCountries = {setContries}/>
                  </td> 

                  <td>
                    <Delete data={s} setCou countries= {countries} setCountries = {setContries}/>
                    {/* <Delete code = {props.code}/> */}
                  </td>
              </tr>
            ))}
        </tbody>
        </Table>
        </div>
      );
    }
    
  


export default Country;
