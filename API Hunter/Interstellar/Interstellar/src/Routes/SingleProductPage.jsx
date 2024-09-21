import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function SingleProductPage(){
    const[productdata,setproductdata]=useState([])
    const{id}=useParams()

    useEffect(()=>{
      axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
      .then((res)=>{
        setproductdata(res.data.data)
        // console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    })

    return (
        <div data-testid="products-container">   
            <div>
                <h3 data-testid="product-brand">{productdata.brang}</h3>
            </div>
            <div >
            <img src={productdata.img} style={{height:"500px", width:"500px"}} data-testid="product-image"/>
            </div>
            <div data-testid="product-category">{productdata.category}
            </div>
           
            <div data-testid="product-details">{productdata.details}
            </div>
            <div data-testid="product-price">{productdata.price}
            </div>

            </div>
    )
}
export default SingleProductPage