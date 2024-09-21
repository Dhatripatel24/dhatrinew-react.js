import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import ProductsTable from "../Components/ProductsTable";


function Dashboard() {

const {logoutUser,auth}=useContext(AuthContext)
const[productdata,setproductdata]=useState([])

useEffect(()=>{
  axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
  .then((res)=>{
    setproductdata(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
})

  return (
    <div style={{fontWeight:"bold"}}>
      <h3>DASHBOARD</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn" className="btn">LOGOUT</button>
        <p>
        TOKEN:
          <b data-testid="user-token">{auth.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable data={productdata}/> 
      </div>
    </div>
  );
}

export default Dashboard;
