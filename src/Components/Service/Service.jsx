import React from "react";
import "./Service.css";
import { SiGoogleads } from "react-icons/si";
import { TbSpeakerphone } from "react-icons/tb";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { TbPageBreak } from "react-icons/tb";
import {FaMeta} from "react-icons/fa"
import {SiShopify} from "react-icons/si"
import ServiceData from "./ServiceData";

const Service = () => {
  return (
    <div className="about-me about-service">
      <div className="Services">
        <div className="serv-head">
          <b>Services</b>
          <h2>Never compromise with quality</h2>
        </div>
        <div className="serv-content">
          <ServiceData
            icon={<SiGoogleads />}
            title="Google ads"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />
          <ServiceData
            icon={<TbSpeakerphone  />}
            title="Facebook ads"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<BsFillPersonCheckFill />}
            title="Google analytics"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<TbPageBreak />}
            title="Meta ads"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<FaMeta  />}
            title="Shopify"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<SiShopify />}
            title="Experience Design"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
