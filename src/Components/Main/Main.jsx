import React from 'react'
import "./Main.css"
import Main1 from "../../images/Main1.jpeg"
import {FiFacebook} from "react-icons/fi"
import {BsTwitter} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"
import {BsLinkedin} from "react-icons/bs"
import {BsYoutube, BsCircleFill, BsCircle} from "react-icons/bs"
import {RxCross1} from "react-icons/rx"



const Main = () => {
  return (
    <>
    <div className="Main-page">
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
            <h1>Tom Anderson</h1>
            <p>
            A passionate UI/UX Designer and Senior Web Developer based In NYC, USA
            </p>
            <div className="Main-icons">
                <span><FiFacebook/></span>
                <span><BsTwitter/></span>
                <span><FiInstagram/></span>
                <span><BsLinkedin/></span>
                <span><BsYoutube/></span>
            </div>
        </div>
        <div className="Main-right">
            <span></span>
            <img src={Main1} alt="" />
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
