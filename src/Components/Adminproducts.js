import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { myContext } from "./Context";
import { useNavigate } from "react-router-dom";

const Adminproducts = () => {
  const { product, setProduct } = useContext(myContext);

  const navigate = useNavigate();

  const deleteitem = (id) => {
    setProduct((a) => a.filter((item) => item.id !== id));
  };
  return (
    <div>
      
      <div>
        <h2>CLOTHS AND PRODUCTS</h2>
      </div>
      <button onClick={() => navigate("/addproducts")}>ADD PRODUCTS</button>
      <div>
        {product.map((item) => (
          <Card
            style={{ width: "18rem" }}
            className="d-inline-flex"
            key={item.id}
          >
            <i
              onClick={() => deleteitem(item.id)}
              class="fa-regular fa-trash-can"
            ></i>

            <Card.Img variant="top" src={item.src} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <h5>Rs.{item.price}</h5>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate(`/edit/${item.id}`);
                }}
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Adminproducts;
