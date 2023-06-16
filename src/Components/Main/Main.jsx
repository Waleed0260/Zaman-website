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
import { PopupButton } from 'react-calendly'

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
            An Innovative digital marketing coordinator | Google and Facebook ads media buyer
            </p>
            <div className="Main-icons">
                <span><a href="https://www.facebook.com/profile.php?id=10008944707" target="blank"><FiFacebook/></a> </span>
                <span><a href="https://twitter.com/The_Marketer_70" target="blank"><BsTwitter/></a></span>
                <span><a href="https://www.instagram.com/zamanthemarketer" target="blank"><FiInstagram/></a></span>
                <span><a href="https://www.linkedin.com/in/zamanzahoor" target="blank"><BsLinkedin/></a></span>
                <span><a href="https://www.youtube.com/channel/UC5jBVHi1vNjD8UKhKIq3ijQ" target="blank"><BsYoutube/></a></span>
                <span><a href="https://www.quora.com/profile/Zaman-Zahoor-2" target="blank"><BsQuora   style={{color: "red"}}/></a></span>
            </div>
            {/* <button className='concul'> </button> */}
            <div id="root"></div>
            
            <PopupButton
        url="https://calendly.com/zamanzahoor/free-consultation-to-boost-your-business?month=2023-06"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Book free Consultation now"
        className='concul'
      />
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
