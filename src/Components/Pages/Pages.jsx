import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import "./Pages.css"
import {AiFillFile, AiFillContacts} from "react-icons/ai"
import {TfiBag} from "react-icons/tfi"
import {FiSettings} from "react-icons/fi"
import {BiMessageCheck, BiMessageRounded} from "react-icons/bi"
import {FaPager} from "react-icons/fa"
import About from '../About/About'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import Blog from '../Blog/Blog'
import Testimonial from '../Testimonial/Testimonial'
import Service from '../Service/Service'

const Pages = () => {
  const[about, setAbout] = useState(false);
  const[resume, setResume] = useState(false);
  const[contact, setContact] = useState(false);
  const[blog, setBlog] = useState(false);
  const[test, setTest] = useState(false);
  const[serv, setServ] = useState(false)

  // Counter states
  const[clickCount, setClickCount] = useState(0)
  const[click, setClicked] = useState(0)
  const[countResume, setCountResume] = useState(0);
  const[countServ, setCountServ] = useState(0);
  const[countTest, setCountTest] = useState(0)
  const[countBlog, setCountBlog] = useState(0);



  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount % 2 === 0) {
      setAbout(true);
      setResume(false)
      setContact(false);
      setBlog(false);
      setTest(false)
      setServ(false)
    }
      else{
        setAbout(false)
      }
  };



  const handleResume = () => {
    setCountResume(prevCount => prevCount + 1);
    if (countResume % 2 === 0) {

    setAbout(false);
    setResume(true)
    setContact(false);
    setAbout(false);
    setBlog(false);
    setTest(false)
    setServ(false)
    }
    else{
      setResume(false)
    }
  };

  const handleServ = () => {
    setCountServ(prevCount => prevCount + 1);
    if (countServ % 2 === 0) {
    setAbout(false);
    setResume(false)
    setContact(false);
    setAbout(false);
    setBlog(false);
    setTest(false)
    setServ(true)
    }
    else{

      setServ(false)
    }
  };

  const handleTest = () => {
    setCountTest(prevCount => prevCount + 1);
    if (countTest % 2 === 0) {
    setAbout(false);
    setResume(false)
    setContact(false);
    setAbout(false);
    setBlog(false);
    setTest(true)
    setServ(false)
    }
    else{
      setTest(false);
    }
  };

  const handleBlog = () => {
    setCountBlog(prevCount => prevCount + 1);
    if (countBlog % 2 === 0) {
    setAbout(false);
    setResume(false)
    setContact(false);
    setAbout(false);
    setBlog(true);
    setTest(false)
    setServ(false)
    }
    else{
      setBlog(false)
    }
  };

  const handleContact = () => {
    setClicked(prevCount => prevCount + 1);

    if (click % 2 === 0) {

    setAbout(false);
    setResume(false)
    setContact(true);
    setAbout(false);
    setBlog(false);
    setTest(false)
    setServ(false)
    }
    else{
      setContact(false)
    }
  };



  return (
    <div>
      <Heading icons={<AiFillFile/>} text="About me" click={handleClick}/>
      <div className="about-page">
      {about && <About/>}
      </div>
      <Heading icons={<AiFillContacts/>} text="Resume" click={handleResume}/>
      <div className="about-page">
      {resume && <Resume/>}
      </div>     
       <Heading icons={<TfiBag/>} text="Portfolio" />
      <Heading icons={<FiSettings/>} text="Service" click={handleServ}/>
      <div className="about-page">
      {serv && <Service/>}
      </div>
      <Heading icons={<BiMessageCheck/>} text="Testimonial" click={handleTest}/>
      <div className="about-page">
      {test && <Testimonial/>}
      </div>          
      <Heading icons={<FaPager/>} text="Blog" click={handleBlog}/>
      <div className="about-page">
      {blog && <Blog/>}
      </div>          
      <Heading icons={<BiMessageRounded/>} text="Contact" click={handleContact}/>
      <div className="about-page">
      {contact && <Contact/>}
      </div>     

    </div>
  )
}

export default Pages
