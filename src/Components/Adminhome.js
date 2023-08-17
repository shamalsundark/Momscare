import React from 'react'
import Adminnav from './Adminnav'
import AdminSlide from './AdminSlide'
import Adminproducts from './Adminproducts'
import Adminfooter from './Adminfooter'

const Adminhome = () => {
  return (
    <div>
     <div className='sticky-top'>
        <Adminnav/>
    </div> 
    <div className='slidediv'>
        <AdminSlide />
    </div>
    <div>
        <Adminproducts />
    </div>
    <div>
      <Adminfooter />
    </div>
    </div>
  )
}

export default Adminhome
