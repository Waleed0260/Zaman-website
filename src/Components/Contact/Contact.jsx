import React, {useRef, useState} from "react";
import "./Contact.css";
import {CiMobile4} from "react-icons/ci"
import {AiOutlineMail} from "react-icons/ai"
import {MdOutlineLocationOn} from "react-icons/md"
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  const [name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[done, setDone] = useState(false)


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_970a0ul', 'template_udx4x7c', form.current, 'PQtzxGdy62bOdEKE6')
      .then((result) => {
          setDone(true)
      }, (error) => {
        alert("There was an error", error)
      });
  };


  return (
    <div className="about-me">
      <div className="contact-me">
        <div className="contact">
            <b>Contact Me</b>
            <h2>Contact me to get your work done</h2>
            <div className="con-icons">
                <div className="first">
                    <span><CiMobile4/></span>
                    <div>
                        <b>Call Me</b>
                        <p style={{marginTop: "5px"}}>+92 3437009415</p>
                    </div>
                </div>

                <div className="first">
                    <span><AiOutlineMail/></span>
                    <div>
                        <b>Email </b>
                        <p style={{marginTop: "5px"}}>zamanmuhammadi700 <br />@gmail.com</p>
                    </div>
                </div>

                <div className="first">
                    <span><MdOutlineLocationOn style={{color: "white"}}/></span>
                    <div>
                        <b>Address</b>
                        <p style={{marginTop: "5px"}}>Bristol UK</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="form">
          <form ref={form} id="usrform" onSubmit={sendEmail}>
            <input type="text" name="from_name" id="" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" required/>
            <input type="email" name="from_email" id="" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" required />
            <input type="email" name="number" id="" placeholder="Phone Number (optional)"  />

          </form>
          <textarea name="message" form="usrform" placeholder="Enter Your Comments Here" required></textarea>
          <button type="submit" form="usrform"><b>Submit</b></button>
          {done && <div style={{marginTop: "10px"}} className="done">Thank you for contacting me</div>}

        </div>

      </div>
    </div>
  );
};

export default Contact;
