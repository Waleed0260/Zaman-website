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
              Goal-oriented digital marketer with a strong passion for optimizing campaigns and driving results. Proficient in <b>Google Ads</b>, Facebook Ads, social media and email marketing, and marketing analytics. Experienced in leveraging data analytics, <b>media planning, customer personae,</b> and <b>marketing funnels</b> to achieve measurable success in digital campaigns. Actively stays updated on industry trends and best practices, with a keen interest in <b>using AI and prompt engineering</b> to enhance digital marketing strategies. Looking for an internship opportunity to further excel and make a positive impact in digital marketing.

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
                Marketing Assistant 
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
                  <li>
                    {" "}
                    Conduct market research to identify trending content

                  </li>
                  <li>
                    {" "}
                    Develop content for social media posts and manage website content

                  </li>
                  <li>
                    {" "}
                    Create monthly social media calendars and publish posts 

                  </li>
                </ul>
              </div>
              <div className="felixhawk">
                <b>TAJI Digital Solutions</b>
                <p >E-commerce  Analyst</p>
                <ul>
                  <li>Design Shopify stores </li>
                  <li>
                  Manage/upload and edit product/category content, images, prices, variants, and product listings that will be published on Shopify websites.

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
