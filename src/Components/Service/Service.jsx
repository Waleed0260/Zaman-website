import React from "react";
import "./Service.css";
import { TbFlower } from "react-icons/tb";
import { TfiBag } from "react-icons/tfi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { TbPageBreak } from "react-icons/tb";
import {BsBox} from "react-icons/bs"
import {BsHandbag} from "react-icons/bs"
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
            icon={<BsBox />}
            title="Wireframing"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />
          <ServiceData
            icon={<TbFlower />}
            title="Prototype"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<TfiBag />}
            title="UI Design"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<BsFillPersonCheckFill />}
            title="Personal Creation"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<BsHandbag />}
            title="Case Study"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />{" "}
          <ServiceData
            icon={<TbPageBreak />}
            title="Experience Design"
            para="Web development is the building and maintenance of websites. it's the work that..."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
