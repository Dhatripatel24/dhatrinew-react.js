import { useEffect } from 'react'
import { useState } from 'react'
import {page} from 'react'
import './App.css'

function App() {
  const [value, setvalue] = useState([])
  const [page,setpage]=useState(1)
  console.log("1")
  const [loading, setloading] = useState(false)
  const fetchdata = () => {
    setloading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setloading(false)
        setvalue(data)
      })
      .catch((err) => console.log(err))
  }


  console.log(value)

  useEffect(() => {
    fetchdata()
    console.log("2")
  }, [page])// mount phase
  return loading ? <h2>loading..</h2> : (
    <>
      {console.log("3")}
      {value.map((el) => (<div key={el.id} style={{ border: "2px gray", marginTop: "2px", boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <h2>{el.id}</h2>
        <h5>{el.title}</h5>
        <p>{el.body}</p>
      </div>))}

      <button onClick={()=>setpage(page-1)}>PRIVIOUS</button>
      <span>{page}</span>
      <button onClick={()=>setpage(page+1)}>NEXT</button>
    </>
  )
}

export default App
