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
          Hi! I am Zaman, A passionate Marketing enthusiast, and Digital
          Marketing Coordinator that Drives Impressive Growth with Innovative
          Strategies. Expert Google and Facebook Ads
          Media Buyer Maximizes ROI with Targeted Campaigns and Data-Driven
          Insights. I am committed to staying ahead of industry trends and using
          cutting-edge technologies to drive successful results.
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
