import React from 'react'
import "./Main.css"
import digitalmarketer from "../../images/digitalmarketer.png"
import {FiFacebook} from "react-icons/fi"
import {BsTwitter} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"
import {BsLinkedin} from "react-icons/bs"
import {BsYoutube, BsCircleFill, BsCircle} from "react-icons/bs"
import {RxCross1} from "react-icons/rx"
import {BsQuora} from "react-icons/bs"
import MyResume from "../../images/MyResume.pdf"

const Main = () => {
  return (
    <>
    <div className="Main-page">
        <a href={MyResume} download>
            <button className='main-btn'><b>Download CV</b></button>
        </a>
        <span><RxCross1 className='animation'/></span>
        <span><BsCircle/></span>
        <span><BsCircleFill/></span>
        <span><BsCircleFill className='small'/></span>
        <span><BsCircle className='small'/></span>
        <span><BsCircleFill className='large'/></span>
        <span><BsCircle className='small'/></span>
        <span><BsCircleFill className='small'/></span>
        <span><BsCircle className='large'/></span>
        <span><BsCircle className='small'/></span>





    <div className='Main'>
        <div className="Main-left">
            <b>I'm</b>
            <h1>Zaman Zahoor</h1>
            <p>
            Hi I am Zaman An Innovative digital marketing coordinator | Google and Facebook ads media buyer

            </p>
            <div className="Main-icons">
                <span><a href="https://www.facebook.com/profile.php?id=10008944707" target="blank"><FiFacebook/></a> </span>
                <span><a href="https://twitter.com/The_Marketer_70"><BsTwitter/></a></span>
                <span><a href="https://www.instagram.com/zamanthemarketer"><FiInstagram/></a></span>
                <span><a href="https://www.linkedin.com/in/zamanzahoor"><BsLinkedin/></a></span>
                <span><a href="https://www.youtube.com/channel/UC5jBVHi1vNjD8UKhKIq3ijQ"><BsYoutube/></a></span>
                <span><a href="https://www.quora.com/profile/Zaman-Zahoor-2"><BsQuora/></a></span>

            </div>
        </div>
        <div className="Main-right">
            <span></span>
            <img src={digitalmarketer} alt="" />
            <span></span>
        </div>
    </div>
    <span><BsCircleFill/></span>

    <span><BsCircleFill className='large'/></span>
    <span><BsCircle/></span>
    <span><RxCross1 className='animation'/></span>
    <span><RxCross1 className='animation'/></span>



    </div>

    </>

  )
}

export default Main
