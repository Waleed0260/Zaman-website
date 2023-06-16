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
      href: "linkedin.com/company/felix-hawk/================================================================================================================================================================================================================================",
      review:
        "We are incredibly fortunate to have Zaman Zahoor as our social media manager and content creator. Their creative vision and strategic approach have transformed our online presence, resulting in a significant increase in engagement and brand awareness. Their ability to consistently deliver high-quality content and effectively manage our social media channels has exceeded our expectations. Zaman Zahoor is an invaluable asset to our team, and we highly recommend their expertise to any company looking to elevate their social media strategy.- CEO , Felixhawk.",
    },
    {
      img: link,
      heading: "CINDY",
      href: "https://www.linkedin.com/in/cindypregita/",
      review:
        "I am incredibly proud of Zaman Zahoor is growth and accomplishments as a digital marketing learner. Their dedication, enthusiasm, and commitment to mastering the various aspects of digital marketing have been truly impressive. Throughout the course, Zaman Zahoor consistently exceeded expectations, tackling every task with a high level of professionalism and creativity. Their ability to grasp complex concepts and apply them effectively in real-world scenarios is commendable. I have no doubt that Zaman Zahoor has a bright future ahead in the field of digital marketing, and I wholeheartedly endorse their skills and expertise. - [CINDY]",
    },
    {
      img: elo,
      heading: "CEO of ELO",
      href: "https://www.exportleftovers.com/",
      review:
        "Working with Zaman Zahoor as our Google Ads expert has been a game-changer for our e-commerce business. They significantly increased our online visibility, driving a substantial boost in traffic and conversions. Their expertise and dedication have proven invaluable, and we highly recommend Zaman Zahoor to any company looking to achieve remarkable results with Google Ads. -CEO of ELO",
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
