import React from 'react'
import "./Projects.css"
import { MdOutlineBakeryDining } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { SiElectronbuilder } from "react-icons/si";
import { SiYourtraveldottv } from "react-icons/si";
import {GiLoincloth} from "react-icons/gi"
import {SiStmicroelectronics} from "react-icons/si"
import ServiceData from '../Service/ServiceData';

const Projects = () => {
  return (
    <div className="about-me about-service">
      <div className="Services">
        <div className="serv-head">
          <b>Projects</b>
          <h2>Show Casing my previous projects</h2>
        </div>
        <div className="serv-content">
          <ServiceData
            icon={<MdOutlineBakeryDining />}
            title="Local Bakery"
            para="Drive targeted traffic and boost conversions with my specialized Google Ads services." project="Project" client="Client" objectives="Goal and objectives" goals="[Provide a concise overview of the project, including the client, industry, and key challenges."
          />
          <ServiceData
            icon={<FaHotel  />}
            title="Hotel"
            para="Reach your target audience effectively and fulfill your marketing goals with our specialized FB Ads services."  project="Project" client="Client" objectives="Goal and objectives" goals="[Provide a concise overview of the project, including the client, industry, and key challenges."
          />{" "}
          <ServiceData
            icon={<GiLoincloth />}
            title="Clothing"
            para="Unlock actionable insights and optimize your marketing strategies using Google Analytics services."  project="Project" client="Client" objectives="Goal and objectives" goals="[Provide a concise overview of the project, including the client, industry, and key challenges."
          />{" "}
          <ServiceData
            icon={<SiElectronbuilder />}
            title="E-commerce"
            para="Simplify your conversion tracking process with my streamlined Google Tag Manager solutions."  project="Project" client="Client" objectives="Goal and objectives" goals="[Provide a concise overview of the project, including the client, industry, and key challenges."
          />{" "}
          <ServiceData
            icon={<SiYourtraveldottv  />}
            title="Travel Agency"
            para="
Understand your target audience better through my vast market research and customer persona ideas."  project="Project" client="Client" objectives="Goal and objectives" goals="[Provide a concise overview of the project, including the client, industry, and key challenges."
          />{" "}
          <ServiceData
            icon={<SiStmicroelectronics />}
            title="Electronics"
            para="Take your business to the next level with Shopify by helping you build, optimize, and scale your online store for success."  project="Project" client="Client" objectives="Goal and objectives" goals="[Provide a concise overview of the project, including the client, industry, and key challenges."
          />
        </div>
      </div>
    </div>
  )
}

export default Projects