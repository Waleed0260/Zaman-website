import React from 'react'
import "./Main.css"
import Main1 from "../../images/Main1.jpeg"
import {FiFacebook} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import {FiInstagram} from "react-icons/fi"
import {FaLinkedinIn} from "react-icons/fi"
import {FiYoutube} from "react-icons/fi"



const Main = () => {
  return (
    <div className='Main'>
        <div className="Main-left">
            <b>I'm</b>
            <h1>Tom Anderson</h1>
            <p>
            A passionate UI/UX Designer and Senior Web Developer based In NYC, USA
            </p>
            <div className="Main-icons">
                <span><FiFacebook/></span>
                <span><FiFacebook/></span>
                <span><FiFacebook/></span>
                <span><FiFacebook/></span>
                <span><FiFacebook/></span>
                <span><FiFacebook/></span>

            </div>
        </div>
        <div className="Main-right">
            <span></span>
            <img src={Main1} alt="" />
            <span></span>
        </div>
    </div>
  )
}

export default Main
