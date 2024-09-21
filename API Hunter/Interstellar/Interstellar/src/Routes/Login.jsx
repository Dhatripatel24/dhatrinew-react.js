import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader";

function Login() {

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const {loginUser}=useContext(AuthContext)
  const [isloading,setisloading]=useState(false)
  const navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault();
    setisloading(true)
    // console.log(email,password)
    axios.post("https://reqres.in/api/login",{email,password})
    .then((res)=>{
      setisloading(false)
      loginUser(res.data.token)
      console.log(res.data.token)
      navigate("/dashboard")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return isloading ? <Loader /> :(
    <div>
      <form data-testid="login-form" onSubmit={(e)=>handlesubmit(e)} className="form">
        <div><br /><br /><br /> <br />

          <label>
            Email: &nbsp;
            <input data-testid="email-input" value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="email" />
          </label>
        </div><br />
        <div>
          <label>
            Password:&nbsp;
            <input
              data-testid="password-input"
              value={password} onChange={(e)=>setpassword(e.target.value)}
              type="password"
              placeholder="password"
            />
          </label>
        </div><br />
        <div >
          <input className="btn" data-testid="form-submit" type="submit" value="SUBMIT" />
        </div><br />
      </form><br />
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
