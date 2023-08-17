import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Context";
import { Usercontext } from "./Usercontext";

const Baby = () => {
  const { setSearch ,cart} = useContext(myContext);
  const { loggedin, setLoggedin,userData } = useContext(Usercontext);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand className="log" href="#" onClick={() => navigate("/")}>
            MOMS CARE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#" onClick={() => navigate("/")}>
                HOME
              </Nav.Link>
              <Nav.Link href="#action2"></Nav.Link>
              <Nav.Link href="#contact">CONTACT US</Nav.Link>
              <Nav.Link  onClick={() => navigate("/cloths")}>
                CLOTHES
              </Nav.Link>
              <Nav.Link href="#product">NEW ARRIVALS</Nav.Link>
              <Nav.Link href="#action8" onClick={() => navigate("/products")}>
                PRODUCTS
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {loggedin === true ? (
                  <div className="d-inline-flex">
                  <Nav.Link>
                    <i class="fa-regular fa-user"></i>
                    <br />
                    {userData[userData.length - 1].name}
                    </Nav.Link>
                    
                    <Nav.Link href="#action7" onClick={() => navigate("/cart")}>
                     <sup  > <i className="fa-solid fa-cart-shopping">{cart.length}</i></sup>
                    </Nav.Link>
                    <Button className="custom-button"
  onClick={() => {
    setLoggedin(!loggedin);
    window.location.reload(false);
    navigate('/login');
  }}
>
  logout
</Button>

                  </div>
                ) : (
                  <div className="d-inline-flex">
                    <NavDropdown
                      title="Login/signup"
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item onClick={() => navigate("/register")}>
                        REGISTRATION
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate("/loged")}>
                        Login
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                )}
              </Nav>

              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Baby;
