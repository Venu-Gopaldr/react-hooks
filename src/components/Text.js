import { useState } from "react";
import React from 'react'


const Text = () => {
  const [color, setColor] = useState("red")

  return(
    <>
    <h1>My favorite color is {color}!!</h1>
    <button type="btn btn-primary" onClick={()=> setColor("blue")}>Change color</button>
    </>
  )
}