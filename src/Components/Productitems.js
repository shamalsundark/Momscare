import React, { useContext } from 'react'
import { myContext } from './Context'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Baby from './Baby';
import { useNavigate } from 'react-router-dom';


const Productitems = () => {
    const valuee=useContext(myContext)
    const {product}=valuee
    const data=product.filter((item)=>item.type==='Products')
    const navigate=useNavigate()
  return (
    <div>
       <header className='sticky-top'><Baby/></header>
       {data.map((item)=>(
     <Card
     className='shadow p-3 mb-5 bg-body-tertiary rounded d-inline-flex'
     style={{ width: '18rem' }}>
      <Card.Img variant="top" 
      src={item.src} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.discription}
        </Card.Text>
        <h5>{item.price}</h5>
        <Button variant="primary" onClick={()=>{navigate(`/viewmore / ${item.id}`)}}>view</Button>
      </Card.Body>
    </Card>
        ))}
    </div>
  )
}

export default Productitems
