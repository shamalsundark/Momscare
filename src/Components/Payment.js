import React from 'react'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Payment = () => {
  return (
    <div>
    <Container
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
      }}
    >
      <Row className="d-flex justify-content-center">
        <Col md="10" lg="8" xl="5">
          <Card className="rounded-3">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h3>Settings</h3>
                <h6>Payment</h6>
              </div>
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  alt="Mastercard"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <Form.Control
                      label="Card Number"
                      id="form1"
                      type="text"
                      size="lg"
                    //   value="**** **** **** 3193"
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                  alt="Visa"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <Form.Control
                      label="Card Number"
                      id="form2"
                      type="text"
                      size="lg"
                      
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <p className="fw-bold mb-4">Add new card:</p>
              <Form.Control
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
                value="Anna Doe"
              />
              <Row className="my-4">
                <Col size="7">
                  <Form.Control
                    label="Card Number"
                    id="form4"
                    type="text"
                    size="lg"
                    // value="1234 5678 1234 5678"
                  />
                </Col>
                <Col size="3">
                  <Form.Control
                    label="Expire"
                    id="form5"
                    type="password"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </Col>
                <Col size="2">
                  <Form.Control
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                  />
                </Col>
              </Row>
              <Button variant="success" size="lg" block>
                Add card
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Payment
