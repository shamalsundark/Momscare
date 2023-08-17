import React, { useContext, useState } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { myContext } from './Context';

const AdminLogin = () => {
    const {adminData} = useContext(myContext)
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const navigate=useNavigate()

    const handleClick = (e) => {
    e.preventDefault();
    
    adminData.forEach(data => {
    if(data.email===email&& data.password===password){
        navigate('/Adminhome')
    }
    else{
        alert("invalid login")
    }

    
    
});
    }
 
  return (
    <div className='adminlog'>
         <Form>
      <Container>
       
        <Form.Group controlId="form2Example1" className="mb-4">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
        </Form.Group>

       
        <Form.Group controlId="form2Example2" className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
        </Form.Group>

       
        <Row className="mb-4">
          <Col className="d-flex justify-content-center">
           
            <Form.Check type="checkbox" id="form2Example31" label="Remember me" defaultChecked />
          </Col>
          <Col>
          
            <a href="#!">Forgot password?</a>
          </Col>
        </Row>

        
        <Button type="submit"  variant="primary" block className="mb-4"   onClick={handleClick} >Sign in</Button>
      
        
      </Container>
    </Form>
    </div>
  )
}

export default AdminLogin
