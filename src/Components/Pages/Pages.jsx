import React, { useState, useReducer } from 'react'
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
import Projects from '../Projects/Projects'
import Certificates from '../Certificates/Certificates'

const initialState = {
  about: true,
  resume: false,
  projects: false,
  certificate: false,
  contact: false,
  blog: false,
  test: false,
  serv: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL":
      return {
        ...initialState
      }
    case "ABOUT":
      return {
        ...initialState,
        about: true,
      };
    case "RESUME":
      return {
        ...initialState,
        resume: true,
      };
      case "PROJECTS":
      return {
        ...initialState,
        projects: true,
      };
      case "CERTIFICATES":
        return {
          ...initialState,
          certificate: true,
        };
    case "CONTACT":
      return {
        ...initialState,
        contact: true,
      };
    case "BLOG":
      return {
        ...initialState,
        blog: true,
      };
    case "TEST":
      return {
        ...initialState,
        test: true,
      };
    case "SERV":
      return {
        ...initialState,
        serv: true,
      };
    default:
      return state;
  }
};



const Pages = () => {

  const[clickCount, setClickCount] = useState(0)
  const[click, setClicked] = useState(0)
  const[clickProjects, setClickProjects] = useState(0);
  const[clickCerts, setClickCerts] = useState(0);

  const[countResume, setCountResume] = useState(0);
  const[countServ, setCountServ] = useState(0);
  const[countTest, setCountTest] = useState(0)
  const[countBlog, setCountBlog] = useState(0);

const [state, dispatch] = useReducer(reducer, initialState);

const handleClick = () => {
  setClickCount(prevCount => prevCount + 1);
  if (clickCount % 2 === 0){
  dispatch({ type: "ABOUT" });
  }
  else{
    dispatch({type: "INITIAL"})
  }
};

const handleResume = () => {
  setClicked(prevCount => prevCount + 1);
  if (click % 2 === 0){
  dispatch({ type: "RESUME" });
  } 
  else{
    dispatch({type: "INITIAL"})
  }
};

const handleProjects = () => {
  setClickProjects(prevCount => prevCount + 1);
  if (clickProjects % 2 === 0){
  dispatch({ type: "PROJECTS" });
  } 
  else{
    dispatch({type: "INITIAL"})
  }
};

const handleCertificates = () => {
  setClickCerts(prevCount => prevCount + 1);
  if (clickCerts % 2 === 0){
  dispatch({ type: "CERTIFICATES" });
  } 
  else{
    dispatch({type: "INITIAL"})
  }
};

const handleServ = () => {
  setCountResume(prevCount => prevCount + 1);
  if (countResume % 2 === 0){
  dispatch({ type: "SERV" });
  }
  else{
    dispatch({type: "INITIAL"})

  }
};

const handleTest = () => {
  setCountServ(prevCount => prevCount + 1);
  if (countServ % 2 === 0){
  dispatch({ type: "TEST" });
  }
  else{
    dispatch({type: "INITIAL"})
  }
};

const handleBlog = () => {
  setCountBlog(prevCount => prevCount + 1);
  if (countBlog % 2 === 0){
  dispatch({ type: "BLOG" });
  }
  else{
    dispatch({type: "INITIAL"})
  }
};

const handleContact = () => {
  setCountTest(prevCount => prevCount + 1);
  if (countTest % 2 === 0){
  dispatch({ type: "CONTACT" });
  } 
  else{
    dispatch({type: "INITIAL"})
  }
};
console.log("About",state.about)


  return (
    <div>
      <Heading icons={<AiFillFile/>} text="About me" onClick={handleClick}/>
      <div className="about-page">
      {state.about && <About/>}
      </div>
      <Heading icons={<AiFillContacts/>} text="Resume" click={handleResume}/>
      <div className="about-page">
      {state.resume && <Resume/>}
      </div>
      <Heading icons={<AiFillContacts/>} text="Projects" click={handleProjects}/>
      <div className="about-page">
      {state.projects && <Projects/>}
      </div>
      <Heading icons={<FiSettings/>} text="Certificates" click={handleCertificates}/>
      <div className="about-page">
      {state.certificate && <Certificates/>}
      </div>
      <Heading icons={<FiSettings/>} text="Services" click={handleServ}/>
      <div className="about-page">
      {state.serv && <Service/>}
      </div>
      <Heading icons={<BiMessageCheck/>} text="Testimonial" click={handleTest}/>
      <div className="about-page">
      {state.test && <Testimonial/>}
      </div>          
      <Heading icons={<FaPager/>} text="Blogs & Research" click={handleBlog}/>
      <div className="about-page">
      {state.blog && <Blog/>}
      </div>          
      <Heading icons={<BiMessageRounded/>} text="Contact" click={handleContact}/>
      <div className="about-page">
      {state.contact && <Contact/>}
      </div>     

    </div>
  )
}

export default Pages
