import React from 'react'
import loading from "./loading.gif"


const Loader = () => {
  return (
    <div style={{width: "100vw", height: "48.2vw", backgroundColor: "black", display: "flex", justifyContent: "center", alignItems:"center", flexDirection: "column"}}>
      <img src={loading} alt="" />
      <h2 style={{color: "white"}}>Loading...</h2>
    </div>
  )
}

export default Loader
