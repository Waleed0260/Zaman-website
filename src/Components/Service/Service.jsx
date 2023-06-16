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
            para="Drive targeted traffic and boost conversions with my specialized Google Ads services."
          />
          <ServiceData
            icon={<BsMeta  />}
            title="Facebook ads"
            para="Reach your target audience effectively and achieve your marketing goals with our specialized Facebook Ads services."
          />{" "}
          <ServiceData
            icon={<SiGoogleanalytics />}
            title="Google analytics"
            para="Unlock actionable insights and optimize your marketing strategies with our expert marketing analytics services powered by Google Analytics."
          />{" "}
          <ServiceData
            icon={<SiGoogletagmanager />}
            title="Google tag manager"
            para="Simplify your conversion tracking process with my streamlined Google Tag Manager solutions."
          />{" "}
          <ServiceData
            icon={<SiGooglemarketingplatform  />}
            title="Market Research"
            para="Understand your target audience better through my comprehensive market research and customer persona solutions."
          />{" "}
          <ServiceData
            icon={<SiShopify />}
            title="Shopify"
            para="Take your business to the next level with Shopify by helping you build, optimize, and scale your online store for success."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
