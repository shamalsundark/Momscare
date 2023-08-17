import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'

import { ListGroup } from 'react-bootstrap'
import { Usercontext } from './Usercontext'
import Adminnav from './Adminnav'

const AdminUserList = () => {
    // const navigate=useNavigate()
    const {userData}=useContext(Usercontext)
  return (
    <div className='userlist'>
        <header className='sticky-top'></header>
      <Adminnav></Adminnav>
        
      <h2 style={{textAlign:"center"}}>User's List</h2>
      {userData.map((item)=>(
        <ListGroup className='list-group list-group-light'>
            <ListGroup.Item  >
            <h5> <i style={{color:"red"}} className='fa-solid fa user'></i>{item.email}</h5>
            <p style={{color:"red"}}>Password:{item.password}</p>
            </ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  )
}

export default AdminUserList
