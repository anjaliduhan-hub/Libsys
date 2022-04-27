import React from 'react'
import {useState, useEffect} from "react"

const Product=()=>{
  const[count, setCount] = useState(0)
  const[val, setVal] = useState("")
  
  useEffect(()=> {
    console.log("updated")
    document.title = `counted ${count} times`
    document.getElementById('txt').innerHTML = val; 
  }
  )
    return (
      <div>
      <button onClick={()=>{setCount(count + 1)}}>Click Me</button>
      <input type ="text" placeholder="enter here" onChange={(e)=>setVal(e.target.value)}></input>
      <p id="txt"></p>
      </div>
    )
  }

  export default Product;
  
  