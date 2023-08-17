import React from 'react'
import Baby from './Baby'
import Slideimage from './Slideimage'
import Product from './Products/Product'
import Footer from './Footer'
import Contactus from './Contactus'
import Lastpic from './Lastpic'

const Home = () => {
  return (
    <div >
      <div className='sticky-top'>
      <Baby /> 
      </div>
      <div>
      <Slideimage />
      </div>
       <div className='head' id='product'>
      <Product />
      </div>
      <div>
        <Lastpic />
      </div>
      <div>
      <Footer />
     </div>
     <div id='contact'>
      <Contactus />
     </div>
    
   </div>
  )
}

export default Home
