import { signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../service/Firebase'

const Navbar = () => {
  const handlelogout=()=>{
    signOut(auth)
    .then((res)=>{
      alert("logout ....")
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div style={{justifyContent:"space-evenly",display:"flex"}}>
        <Link style={{textDecoration:"none"}} to={"/"}>HOME</Link>
        <Link style={{textDecoration:"none"}} to={"/products"}>PRODUCTS</Link>
        <Link style={{textDecoration:"none"}} to={"/login"}>LOGIN</Link>
        <button  onClick={handlelogout} style={{backgroundColor:"red",padding:"5px 10px",border:'none',borderRadius:'5px',fontWeight:"bold",color:"white"}}>LOGOUT  </button>
    </div>
  )
}

export default Navbar
