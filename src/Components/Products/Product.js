import React, { useContext } from 'react'
import { myContext } from '../Context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const {product,search}=useContext(myContext)
    const navigate =useNavigate()
  return (
    <div>
    <h1>BABY CLOTHES AND PRODUCTS</h1>
    {product.filter((item)=>{
      return search.toLowerCase() === " " ? item: item.name.toLowerCase().includes(search)
    }
    ).map((item)=>(
        <div className='d-inline-flex' key={item.id}>
    <Card
     className='shadow p-3 mb-5 bg-body-tertiary rounded bg-image hover-zoom'
     style={{ width: '18rem' }}>
      <Card.Img className='hov' variant="top" 
      src={item.src} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.discription}
        </Card.Text>
        {/* <h5>{item.price}</h5> */}
        <Button variant="primary" onClick={()=>{navigate(`/viewmore / ${item.id}`)}} >VIEW</Button>
      </Card.Body>
    </Card>
    </div>
   ) )}

    </div>
  )
}

export default Product
