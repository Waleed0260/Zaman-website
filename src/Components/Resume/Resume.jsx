import React from "react";
import "./Resume.css";
import { BsRecordCircle } from "react-icons/bs";

const Resume = () => {
  return (
    <div className="about-me about-resume">
      <div className="resume">
        <div className="resume-head">
          <b>Resume</b>
          <h3>Combinatioon of Skill & Expertise</h3>
        </div>
        <div className="resume-main">
          <div className="resume-left">
            <div className="prof-summary">
              <h2>
                <span>
                  <BsRecordCircle />{" "}
                </span>
                Professional Summary
              </h2>
              <p>
               Result-driven digital marketer and  Proficient in Google Ads, Facebook Ads, social media marketing, and marketing analytics. Possesses a strong understanding of driving targeted traffic, optimizing ad campaigns, and analyzing marketing data.  Great exposure in coordinating and executing digital marketing campaigns to drive brand awareness and increase conversions. Experienced in leveraging data analytics to optimize campaigns and enhance ROI.  A proactive learner with a passion for staying updated on industry trends and best practices. Excellent communication and teamwork abilities, combined with a detail-oriented and analytical mindset. Eager to contribute knowledge and gain practical experience in a dynamic marketing environment.

              </p>
            </div>
            <div className="prof-experience">
              <h2>
                <span>
                  <BsRecordCircle />
                </span>
                Experience
              </h2>
              <div className="felixhawk">
                <b>Felixhawk.com</b>
                <p>
                  Social Media manager & Website Designer / Content Producer
                </p>
                <ul>
                  <li>
                    Assist graphic designers in producing resonating content
                  </li>
                  <li>
                    {" "}
                    Support the marketing team on 20+ campaigns across five
                    marketing channels
                  </li>
                </ul>
              </div>
              <div className="felixhawk">
                <b>TAJI Digital Solutions</b>
                <p>Shopify Store Designer and Analyst</p>
                <ul>
                  <li>Create Shopify stores with senior developers</li>
                  <li>
                    Manage/upload and edit product/category content, and product
                    listings that will be published on Shopify websites
                  </li>
                </ul>
              </div>
              <div className="felixhawk">
                <b>Bukhari Developers</b>
                <p>WordPress Designer</p>
                <ul>
                  <li>Convert web designs to WordPress Using Elementor Pro</li>
                  <li>
                    Building the front end of the website and optimizing website
                    speed using Yoast SEO.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="resume-right">
            <h2>
              <span>
                <BsRecordCircle />
              </span>
              Core Skills
            </h2>
            <div className="skills">
              <div className="add">
                <div className="sk-name">
                  <p>Facebook ads</p>
                  <p>100%</p>
                </div>
                <div className="sk-lines">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="add">
                <div className="sk-name">
                  <p>Google ads</p>
                  <p>100%</p>
                </div>
                <div className="sk-lines">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="add">
                <div className="sk-name">
                  <p>Social Media and Email Marketing</p>
                  <p>100%</p>
                </div>
                <div className="sk-lines">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="add">
                <div className="sk-name">
                  <p>Google Analytics 4 | Google Tag Manager</p>
                  <p>100%</p>
                </div>
                <div className="sk-lines">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="software">
                <h2>
                  <span>
                    <BsRecordCircle />
                  </span>
                  Core Skills
                </h2>
                <div className="soft-skills">
                  <div className="office">
                    
                      100%
                    <b>MS OFFICE</b>
                    

                  </div>
                  <div className="office">
                    
                      100%
                    <b>Hootsuite</b>
                    

                  </div>
                  <div className="office">
                    
                      100%
                    <b>Google analytics</b>
                    

                  </div>
                  <div className="office">
                    
                      100%
                    <b>Mailchimp</b>
                    

                  </div>
                  <div className="office">
                    
                      100%
                    <b>Shopify</b>
                    

                  </div>
                  <div className="office">
                    
                      100%
                    <b>CRM Tools</b>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
