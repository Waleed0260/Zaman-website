import React from "react";
import "./Service.css";
import { SiGoogleads } from "react-icons/si";
import { BsMeta } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { SiGoogletagmanager } from "react-icons/si";
import {SiGooglemarketingplatform} from "react-icons/si"
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
            icon={<BsMeta  />}
            title="Facebook ads"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<SiGoogleanalytics />}
            title="Google analytics"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<SiGoogletagmanager />}
            title="Google tag manager"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<SiGooglemarketingplatform  />}
            title="Market Research"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<SiShopify />}
            title="Shopify"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
