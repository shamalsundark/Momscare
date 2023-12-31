import React, { useContext } from "react";
import { Container,  Form, Button } from "react-bootstrap";
import { myContext } from "./Context";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const { product, setProduct } = useContext(myContext);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const afterEdit = product.map((item) => {
      const newname = e.target.name.value || item.name;
      const newtype = e.target.type.value || item.type;
      const newsrc = e.target.src.value || item.src;
      const newdiscription = e.target.description.value || item.discription;
      const newprice = e.target.price.value || item.price;

      if (item.id === parseInt(id)) {
        return {
          ...item,
          id: item.id,
          name: newname,
          type: newtype,
          src: newsrc,
          discription: newdiscription,
          price: newprice,
          Qty: 1,
        };
      } else {
        return item;
      }
    });
    console.log(afterEdit);
    setProduct(afterEdit);
    alert("product edited successfully");
  };

  return (
    <div className="edit">
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="form6Example1" className="mb-4">
          <Form.Label>NAME</Form.Label>
          <Form.Control type="text" id="name" />
        </Form.Group>

        <Form.Group controlId="form6Example3" className="mb-4">
          <Form.Label>TYPE</Form.Label>
          <Form.Control type="text" id="type" />
        </Form.Group>

        <Form.Group controlId="form6Example4" className="mb-4">
          <Form.Label>SRC</Form.Label>
          <Form.Control type="text" id="src" />
        </Form.Group>

        <Form.Group controlId="form6Example5" className="mb-4">
          <Form.Label>DESCRIPTION</Form.Label>
          <Form.Control type="text" id="description" />
        </Form.Group>

        <Form.Group controlId="form6Example6" className="mb-4">
          <Form.Label>PRICE</Form.Label>
          <Form.Control type="number" id="price" />
        </Form.Group>

        <Button className="mb-4" type="submit" block>
          Confirm Edit
        </Button><br />
        <Button
          onClick={() => {
            navigate("/Adminhome");
          }}
        >
          back to products
        </Button>
      </Form>
    </Container>
    </div>
  );
}


export default Edit;
