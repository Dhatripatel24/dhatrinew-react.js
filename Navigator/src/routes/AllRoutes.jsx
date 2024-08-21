import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Logout from '../../Components/Logout'
import Login from '../Components/Login'
import AddProduct from '../Components/AddProduct'
import Description from '../Components/Descrption'
import Home from '../Components/Home'
import Privatepage from '../Components/Privatepage'
import Product from '../Components/Product'
 
function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/product' element={
      
        <Product />
        
        
        }></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/addproduct' element={<AddProduct />}></Route>
       <Route path='/singlepage/:id' element={<Description />}></Route>
       <Route path='*' element={<h1> not found page</h1>}></Route>
       {/* <Route path='/logout' element={<Logout />}></Route> */}
    </Routes>
  )
}

export default AllRoutes
