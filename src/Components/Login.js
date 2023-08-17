import React,{useContext, useState} from 'react'
// import { useAccordionButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Usercontext } from './Usercontext';
import {  useNavigate } from 'react-router-dom';
import Baby from './Baby';



const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {userData,setLoggedin,loggedin}=useContext(Usercontext);
  const navigate=useNavigate()
  const handleClick=(e)=>{
    e.preventDefault();
   userData.forEach(data => {
    if (data.email===email && data.password===password) {
      setLoggedin(!loggedin);

      navigate('/')
    }
    // else{
    //   alert('invalid login credentials')
    // }
    });

  }
  return (
    <div className='lgin-main'>
      <header className='sticky-top'><Baby/></header>
  <Form className='lgin'>
      <Form.Group className="" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} required/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
      <p onClick={()=>{navigate('/AdminLogin')}}>Admin</p>
    </Form>
    </div>
  )
}

export default Login
