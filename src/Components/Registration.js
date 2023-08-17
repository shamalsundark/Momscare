import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Usercontext } from './Usercontext';
import { useNavigate } from 'react-router-dom';
import Baby from './Baby';




const Registration = () => {
  const {userData,setUserData}=useContext(Usercontext);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
 
 const handleSubmit=(e)=>{
      e.preventDefault();
      setUserData((d)=>d=[...userData,{name:name,email:email,password:password}]);
      alert('user registration successfull')
 }
 
 
  return (
    <div className='reg-main'>
       <header className='sticky-top'><Baby/></header>
       <Form  className="reg" onSubmit={handleSubmit}>
      <Row >
        <Form.Group as={Col} controlId="formName">
          <Form.Label>NAME</Form.Label>
          <Form.Control type="name" placeholder="Enter NAME" onChange={(e)=>{setName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control type="email" placeholder="ENTER" onChange={(e)=>{setEmail(e.target.value)}} required/>
        </Form.Group>
      </Row>

      <Form.Group className="" controlId="formGridAddress1">
        <Form.Label>PASSWORD</Form.Label>
        <Form.Control type='password' placeholder="enter address" onChange={(e)=>{setPassword(e.target.value)}} required />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> */}

      {/* <Row className="">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type='city' placeholder='enter city' onChange={} />
        </Form.Group> */}
{/* 
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group> */}

        {/* <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>pin number</Form.Label>
          <Form.Control type='pin number' placeholder='enter' onChange={}  />
        </Form.Group>
      </Row> */}

      {/* <Form.Group className="mb-3" id="">
        <Form.Check type="" label="" />
      </Form.Group> */}
      <Button variant="primary" type="submit"  className="mx-3">
        Submit
      </Button>
      <Button variant="primary" type='submit'  onClick={()=>navigate('/loged')}>
        Login Here
      </Button>
    </Form>
    <p>All ready have an Account ?</p>
    
    </div>
  )
}

export default Registration
