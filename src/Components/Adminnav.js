import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';



const Adminnav = () => {
  const navigate=useNavigate()
  return (
    <div className='adminnav'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"> MOMS CARE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  onClick={() => navigate("/adminhome")}>HOME</Nav.Link>
            <Nav.Link href="#action2" onClick={()=>navigate("/admincloths")}>CLOTHS</Nav.Link>
            <Nav.Link href="#action4" onClick={()=>navigate("/adminitems")}>PRODUCTS</Nav.Link>
            <Nav.Link href="#action5" onClick={()=>navigate("/adminuser")}>USER INFO</Nav.Link>
            <Nav.Link href="#" onClick={()=>navigate("/")}>Logout</Nav.Link>
            
            
            
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Adminnav
