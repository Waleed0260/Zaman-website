import React from "react";
import "./Contact.css";
import {CiMobile4} from "react-icons/ci"
import {AiOutlineMail} from "react-icons/ai"
import {GrLocation} from "react-icons/gr"


const Contact = () => {
  return (
    <div className="about-me about-contact">
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
                        <b>Email US</b>
                        <p style={{marginTop: "5px"}}>+92 3437009415</p>
                    </div>
                </div>

                <div className="first">
                    <span><GrLocation style={{color: "white"}}/></span>
                    <div>
                        <b>Address</b>
                        <p style={{marginTop: "5px"}}>Bristol UK</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="form">
          <form id="usrform">
            <input type="text" name="name" id="" placeholder="name" />
            <input type="email" name="email" id="" placeholder="email"  />
            <input type="text" name="number" id="" placeholder="number"/>
            <input type="text" name="subject" id="" placeholder="subject"/>
            {/* <input type="text" name="message" id="" placeholder="Message" /> */}
          </form>
          <textarea name="comment" form="usrform" placeholder="Enter text here"></textarea>

        </div>
      </div>
    </div>
  );
};

export default Contact;
