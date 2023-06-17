import React from 'react'
import "./Testimonial.css"
import felix from "../../images/felix.jpeg"
import link from "../../images/link.jpeg"
import elo from "../../images/elo.jpeg"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Testimonial = () => {
  const clients = [
    {
      img: felix,
      heading: "CEO , Felixhawk",
      review:
        "We are fortunate to have Zaman Zahoor as our social media manager and content creator. Their creative vision and strategic approach have transformed our online presence, resulting increase in engagement and brand awareness. They exceeded our expectations by managing Social media strategically. He is an asset to our team, and highly recommended.",
    },
    {
      img: link,
      heading: "CINDY (Google)",
      review:
        "I am incredibly proud of Zaman Zahoor in growth & accomplishments as a digital marketing learner. Their dedication, enthusiasm, and commitment to mastering the various aspects of Digital marketing are impressive. Zaman consistently exceeded expectations, tackling every task with professionalism and creativity. He has a bright future ahead in digital marketing.
    },
    {
      img: elo,
      heading: "CEO of ELO",
      review:
        "Working with Zaman Zahoor as our Google Ads expert has been a game-changer for our e-commerce business. They significantly increased our online visibility, boost in traffic and conversions. Their expertise and dedication have proven invaluable, and we highly recommend Zaman Zahoor to any company looking to achieve remarkable results with Google Ads.",
    },
   
  ];
  return (
    <div className='about-me about-test'>
      <div className="testimonial">
        <div className="test-head">
            <b>Testimonials</b>
            <h2>What people say about me</h2>
        </div>
        <Swiper
      // navigation={true}
        modules={[Pagination, Navigation]}
        // slidesPerView={2}
        pagination={{ clickable: true }}
        breakpoints={{
          0:{
            slidesPerView: 1,
          },
          480:{
            slidesPerView: 1,
          },
          768:{
            slidesPerView: 2,
          }
        }}
        >

        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testo">

                <div  className="para">
                <p>{client.review} </p>
                </div>
                <div className="image">
                <img src={client.img} alt="" />
                <b>{client.heading}</b>

                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonial
