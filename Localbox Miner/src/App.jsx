import { useContext, useState } from 'react'
import './App.css'

import Mainsec from './Components/Mainsec'
import Button from './Components/Button'
import { themecontext } from './Context/Themecontex'
import { Navbar } from './assets/components/Navbar'

 export function App() {
  const {theme}=useContext(themecontext)
 
  return (
    <>
      <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white"}}>
 <Navbar/>
    <Mainsec/>
      </div>
      <Button />
    </>
  )
}



