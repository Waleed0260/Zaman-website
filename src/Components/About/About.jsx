import React from 'react'
import "./About.css"
import aboutimg from "../../images/aboutimg.jpg"

const About = () => {
  return (
    <div className='about-me'>
        <div className="about-img">
            <img src={aboutimg} alt="" />
            <div>
                <div className="context">
                    <span className='grey'>Name</span>
                    <b className='white'>Zaman Zahoor</b>
                </div>
                <div className="context">
                    <span className='grey'>Birthday</span>
                    <b className='white'>April 22, 1990</b>
                </div>
                <div className="context">
                    <span className='grey'>Male</span>
                    <b className='white'>hello@anderson.com</b>
                </div>
                <div className="context">
                    <span className='grey'>Phone</span>
                    <b className='white'>+92 3437009415</b>
                </div>
                <div className="context">
                    <span className='grey'>Address</span>
                    <b className='white'>20, bardeshi, dhaka</b>
                </div>
                <div className="context">
                    <span className='grey'>Nationality</span>
                    <b className='white'>Turkey</b>
                </div>
            </div>
        </div>
        <div className="about-text">
            <b>About me</b>
            <h2>World learning UI/UX designer</h2>
            <p>A passionate UI/UX Designer and Web Developer based In NYC, USA</p>
            <p>Hi! My name is Tom Anderson. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
            <button> <b>Download CV</b> </button>
        </div>
    </div>
  )
}

export default About
