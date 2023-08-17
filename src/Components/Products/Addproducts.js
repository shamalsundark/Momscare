import React, { useContext, useState } from 'react'
import { myContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import Adminnav from '../Adminnav'

const Addproducts = () => {
    const [productname,setProductname]=useState()
    const [productamount,setProductamount]=useState()
    const [productcategory,setProductcategory]=useState("cloths")
    const [Img,setImg]=useState("")

    const {product,setProduct} = useContext(myContext)
    const navigate=useNavigate()

    const handleselection=(event)=>{
        setProductcategory(event.target.value)
    }
    const addNewItem=()=>{
        setProduct([...product,{name:productname,price:productamount,type:productcategory,src:Img,id:product.length+1}])
        navigate ('/adminproducts')
    }
  return (
    <div>
        <header className='sticky-top'><Adminnav/></header>
        <div className='addbutton'>
      <div>
        <img className='addproductimg' src={Img} alt="not found" />
      </div>
      <div>
        <label>productname:</label>
        <input type='text' onChange={(a)=>setProductname(a.target.value)}/>
      </div>
      <div>
        <label>Category:</label>
        <select onChange={handleselection}>
            <option value={"cloths"}>Cloths</option>
            <option value={"products"}>Products</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input type='number' onChange={(a)=>setProductamount(a.target.value)}/>
      </div>
      <div>
        <label>Image:</label>
        <input type='text' onChange={(a)=>setImg(a.target.value)}/>
      </div>
      <div>
        <button className='newbutton' onClick={()=>addNewItem()}>ADD</button>
        </div>
      </div>
    </div>
  )
}

export default Addproducts
