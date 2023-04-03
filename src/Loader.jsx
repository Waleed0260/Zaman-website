import React from 'react'
import loader from "./loader.gif"


const Loader = () => {
  return (
    <div style={{width: "100vw", height: "40rem", backgroundColor: "#FFF6F1", display: "flex", justifyContent: "center", alignItems:"center", flexDirection: "column"}}>
      <img src={loader} alt="" />
    </div>
  )
}

export default Loader
