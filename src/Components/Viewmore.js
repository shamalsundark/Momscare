import React, { useContext } from 'react'
import { myContext } from './Context'
import Baby from './Baby';
import { useParams } from 'react-router-dom';
// import { useState } from 'react';

const Viewmore = () => {
    const valuee=useContext(myContext);
    const {product,cart,setCart}=valuee;
    const {id}=useParams();
    // const [count,setCount]=useState(1);
    const data = product.filter((item)=>item.id===parseInt(id));

     const addCArt=()=>{
        if(cart.includes(data[0])){
            alert("this product is already added")
        }else{

        setCart(()=>[...cart,...data])
        alert("successfully added  but login first then show the cart items");
        console.log(cart)
     }
    }
  return (
    
  <div>
     <header className='sticky-top'>
        
        <Baby/>
        </header> 
        {data.map((item)=>(
         <div className='browsediv' key={item.id}>
            <div>
            <img className='browseimage' src={item.src} alt='notfound'/>
            </div>  
            <div className='browsechild'>
                <h2 className='browsename'>{item.name}</h2>
                <h4 className='browserprice'>Rs.{item.price}</h4>
                <p className='browserprice'>{item.discription}</p>
                <div>
                    {/* <button
                    className='countbtn'
                    onClick={() =>{
                        count > 1 ? setCount((prev)=> prev-1):setCount(1);
                    }}
                  >
                    -
                    </button>  
                    <span className='count'>{count}</span>
                    <button
                    className='countbtn'
                    onClick={()=>{
                        setCount((prev)=> prev+1)
                    }
                    }
                    >
                        +
                    </button>
                </div>
                <br />
                <div> */}
                    <button className='addcartbtn' onClick={addCArt}>
                        Add to Cart
                    </button>
                </div>
            </div> 
            </div>
        )
        )
        }
    </div>
    
  );
}

export default Viewmore
