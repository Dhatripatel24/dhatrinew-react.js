import React from "react";
const Post=({body,title})=>{
     return(
 <div style={{border:"2px solid #088395",padding:"5px",marginTop:"35px"}} >
      <h1>{title}</h1>
    <h3>{body}</h3>
 </div>
     )
}
export default Post