import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { myContext } from "../Context";
import Adminnav from "../Adminnav";


function Adminitems() {

  const { product, setProduct } = useContext(myContext);
  const prd = product.filter((data) => { return data.type === "Products"});
  const handleDelete = (id) => {

    const afterremoved = product.filter((item) => {
      return item.id !== parseInt(id);
    });
    console.log(afterremoved);
    if (afterremoved.length > 0) {
      setProduct(afterremoved);
    }
  };
  return (
    <div className="Admincard-container">
        <header className='sticky-top'></header>
      <Adminnav />
        
      {prd.map((item) => (
        <Card style={{ width: "18rem" }} className='d-inline-flex' key={item.id}>
          <Card.Img variant="top" src={item.src} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.discription}</Card.Text>
            <Card.Text>Rs.{item.price}</Card.Text>
          
            <Button variant="primary" onClick={() => handleDelete(item.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Adminitems;
