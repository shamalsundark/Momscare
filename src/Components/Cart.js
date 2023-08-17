import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { myContext } from "./Context";
 import Baby from './Baby';
import Contactus from "./Contactus";
import { useNavigate } from "react-router-dom";
// import Payment from "./Payment";


export default function Cart() {
    const {cart,setCart}=useContext(myContext)
    const [quantities, setQuantities]=useState(cart.map(()=>1));
    const navigate=useNavigate()

    const handleQuantityChange = (index,newQuantity) => {
      const newQuantities=[...quantities];
      newQuantities[index]=newQuantity;
      setQuantities(newQuantities);
    };
    const deleteitem= (id) => {
     setCart((b)=>b.filter((item)=>item.id !== id))
    }

    const increaseQuantity = (index) => {
      const newQuantity = quantities[index]+1;
      handleQuantityChange(index,newQuantity)
    };
    const decreaseQuantity = (index) => {
      const newQuantity = Math.max(0, quantities[index] - 1);
      handleQuantityChange(index, newQuantity);
    };
    const totalPrice = cart.reduce(
      (total, item, index) => {
        const itemTotal = item.price * quantities[index];
        // console.log(`Item ${index} Total: ${itemTotal}`);
        return total + itemTotal;
      },
      0
    );
  return (
    <div className="cart">
       <header className='sticky-top'></header>
       <Baby/>
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      
      <Container className="py-5 h-100">
      
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="8">
            {cart.map((item,index)=>(
            <Card className="card-registration card-registration-2" style={{ borderRadius: "15px" }} key={item.id}>
              <Card.Body className="p-0">
                <Row className="g-0">
                  <Col md="2" lg="2" xl="2">
                    <Image
                      src={item.src}
                      fluid
                      rounded
                      alt="Cotton T-shirt"
                    />
                    </Col>
                    <Col md="3" lg="3" xl="3"> 
                    <p className="text-muted"></p>
                    <p className="text-black mb-0">{item.name}</p>
                    </Col>
                    <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                    <Button  className="px-2"
                    onClick={() => increaseQuantity(index)}>
                      +
                    </Button>
                    <Form.Control type="number" min="0" value={quantities[index]}
                    onChange={(e)=>handleQuantityChange(index, parseInt(e.target.value))}
                     defaultValue={1} size="sm" />
                    <Button  className="px-2"
                    onClick={() => decreaseQuantity(index)}>
                      -
                    </Button>
                    <div>             
                    <button varient="danger" onClick={()=>deleteitem(item.id)}>DELETE</button>
                    </div>
                    </Col>
                    <Col md="3" lg="2" xl="2" className="text-end">
                    <p className="mb-0"><h2>{item.price  }</h2></p>
                    </Col>
                    <button  onClick={()=>{navigate('/Payment')} }>buy</button>
                    <Col md="1" lg="1" xl="1" className="text-end">
                    <a href="#!" className="text-muted">
                      
                    </a>
                  </Col>
                </Row>

                <hr className="my-4" />

           
              </Card.Body>
            </Card>   ))}
          </Col>

          <Col lg="4" className="bg-grey">
            <div className="p-5">
              <h3 className="fw-bold mb-5 mt-2 pt-1">Total price:{totalPrice}</h3>
             
              <hr className="my-4" />

            </div>
          </Col>
                      

        </Row>
       
      </Container>

    </section>
    <div>
      <Contactus />
    </div>
    </div>
  );
}
