import React from 'react'
import Heading from '../Heading/Heading'
import "./Pages.css"
import {AiFillFile, AiFillContacts} from "react-icons/ai"
import {TfiBag} from "react-icons/tfi"
import {FiSettings} from "react-icons/fi"
import {BsChevronCompactDown} from "react-icons/bs"
import {BiMessageCheck, BiMessageRounded} from "react-icons/bi"
import {FaPager} from "react-icons/fa"

const Pages = () => {
  return (
    <div>
      <Heading icons={<AiFillFile/>} text="About me" arrow={BsChevronCompactDown}/>
      <Heading icons={<AiFillContacts/>} text="Resume" arrow={BsChevronCompactDown}/>
      <Heading icons={<TfiBag/>} text="Portfolio" arrow={BsChevronCompactDown}/>
      <Heading icons={<FiSettings/>} text="Service" arrow={BsChevronCompactDown}/>
      <Heading icons={<BiMessageCheck/>} text="Testimonial" arrow={BsChevronCompactDown}/>
      <Heading icons={<FaPager/>} text="Blog" arrow={BsChevronCompactDown}/>
      <Heading icons={<BiMessageRounded/>} text="Contact" arrow={BsChevronCompactDown}/>



    </div>
  )
}

export default Pages
