import React, { useContext, useState } from 'react';
import { themecontext } from '../Context/Themecontex';
import { authcontex } from '../Context/Authcontex';

function Navbar() {
  const {theme}=useContext(themecontext)
  const {isauth ,loginfuction,logoutfuction}=useContext(authcontex)

  console.log(isauth)
  
  const navbarStyle = {
    
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const titleStyle = {
    color:  theme=="light"?'#333':"white",
    fontSize: '24px',
    marginBottom: '5px'
  };

  const subtitleStyle = {
    color:theme=='light'?"#666":"white",
    fontSize: '16px'
  };

  return (
    <div style={navbarStyle}>
      <h1 style={titleStyle}>Navbar</h1>
      <h3 style={subtitleStyle}>The Theme is Light</h3>
       <h2>User Is Login:{isauth ?"Yes":"No"}</h2> 
      <div style={{padding:"20px"}}>
      <button style={{backgroundColor:"red"}} onClick={loginfuction} >Login</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{backgroundColor:"red"}} onClick={logoutfuction} >Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
