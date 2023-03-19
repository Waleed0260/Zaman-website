import React, { useState } from 'react'
import "./Heading.css"
import {AiFillFile} from "react-icons/ai"
import {BsChevronCompactDown} from "react-icons/bs"

const Heading = ({icons, text, arrow}) => {
    const[hover, setHover] = useState(false)

    const handleHover = ()=>{
            setHover(true);
       }
       const style = {
        backgroundColor: hover ? "orange" : "",
        transition: "background-color 0.3s" // Add the transition property with duration
      };

      const stylediv = {
        backgroundColor: hover ? "#ff451b" : "",
        color: hover ? "white" : "",
        transition: "background-color 0.3s" // Add the transition property with duration
      }
      const stylespan = {
        backgroundColor: hover ? "white" : "",
        transition: "background-color 0.3s" // Add the transition property with duration
      }
      const styleicon = {
        color: hover ? "black": "",
        transition: "color 0.3s"
      }

  return (
    <div className='heading' onMouseOver={handleHover} onMouseLeave={()=> setHover(false)}>
      <span style={style}>{icons}</span>
      <div style={stylediv}>
        <b>{text}</b>
      </div>
      <span style={stylespan}><BsChevronCompactDown style={styleicon}/></span>
    </div>
  )
}

export default Heading
