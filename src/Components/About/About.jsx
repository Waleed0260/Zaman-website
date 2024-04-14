import React from "react";
import "./About.css";
import aboutimg from "../../images/aboutimg.jpg";
import MyResume from "../../images/MyResume.pdf"

const About = () => {
  return (
    <div className="about-me">
      <div className="about-img">
        <img src={aboutimg} alt="" />
        <div>
          <div className="context">
            <span className="grey">Name</span>
            <p className="white">Zaman Zahoor</p>
          </div>
          <div className="context">
            <span className="grey">Male</span>
            <p className="white">zamanmuhammadi700@gmail.com</p>
          </div>
          <div className="context">
            <span className="grey">Phone</span>
            <p className="white">+92 3437009415</p>
          </div>
          <div className="context">
            <span className="grey">Address</span>
            <p className="white">Bristol, UK</p>
          </div>
        </div>
      </div>
      <div className="about-text">
        <b>About me</b>
        <h2>Digital Marketing Coordinator | Media Buying </h2>
        <p>
        Aspiring Digital Marketing Expert with a Specialization in Google Ads, Eager to Kickstart and Ready to Dive into an Position, to Learn and Contribute to Your Team's Success. I blend the power of AI and prompt engineering into my innovative strategies. As an expert Google Ads Media Buyer, I specialize in maximizing ROI through meticulously targeted campaigns and data-driven insights. Let's connect and harness the cutting-edge technologies for your business's success.
        </p>
        <a href={MyResume} download>
        <button>
          <b>Download CV</b>

        </button>

        </a>
      </div>
    </div>
  );
};

export default About;
