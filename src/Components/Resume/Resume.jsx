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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                illo sed atque fugit. Exercitationem doloribus optio deleniti,
                laboriosam ipsam tenetur vitae doloremque eos, rem sed numquam
                repellat libero sunt sit natus quasi suscipit praesentium nihil
                pariatur quos facilis aliquam? Reprehenderit, dolores quidem?
                Unde dolor placeat, maiores laborum est sed! Accusamus.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad
                quaerat asperiores. Ea amet quaerat totam nobis non rerum
                provident porro magni autem nostrum veritatis distinctio quidem
                iure soluta quia harum doloremque quisquam explicabo nisi, sed
                placeat ducimus sequi? Aliquam et laboriosam voluptatibus
                voluptate, dolorem nesciunt exercitationem officiis quos
                mollitia!
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
