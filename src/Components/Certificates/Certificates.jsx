import React from 'react'
import "./Certificates.css"
import Ecommerce from "../../images/Ecommerce.png"
import AdsDisplay from "../../images/AdsDisplay.png"
import garage from "../../images/garage.png"
import promote from "../../images/promote.png"
import searched from "../../images/searched.png"


const Certificates = () => {
    const certificates = [
        {
            img: Ecommerce,
            text: "Google Digital Marketing & E-commerce certificates "
        },
        {
            img: AdsDisplay,
            text: " Google ads display certification"
        },
        {
            img: garage,
            text: " Google digital garage"
        },
        {
            img: promote,
            text: "Promote your business from facebook page"
        },
        {
            img: searched,
            text: "Google ads search",
        },
        {
            img: searched,
            text: "Google ads search",
        },
    ]
  return (
    <div className='about-me  about-cert'>
        <div className="cert-head">
            <b>Professional Certifications</b>
            <h2>Demonstrating Expertise and Commitment</h2>
        </div>
        <div className="certificates">
            {certificates.map((data)=>{
                return(
                    <div className='single'>
                        <img src={data.img} alt="" />
                        <p>{data.text}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Certificates