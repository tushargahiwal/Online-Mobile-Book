import React from 'react'
import Dashboard from './Dashboard'
import ProductList from './ProductList'
import Sidebar from './Sidebar'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ProductAdd from './ProductAdd'
import ProductUpdate from './ProductUpdate'
import UserList from './UserList'

const Layout = () => {
  return (
   <div className="d-flex">
    <div className="">
     <Sidebar/>
    </div>
    {/* Main Content */}
    <div className="content-container flex-grow-1 min-vh-100" style={{ backgroundColor: "#EEEEFF" }}> 
        <Header/>
      <Container>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/productlist' element={<ProductList/>}/>
          <Route path='/addproduct' element={<ProductAdd/>}/>
          <Route path='/updateproduct' element={<ProductUpdate/>}/>
          <Route path='/userlist' element={<UserList/>}/>
        </Routes>
      </Container>
    </div>
  </div>
  )
}

export default Layout
