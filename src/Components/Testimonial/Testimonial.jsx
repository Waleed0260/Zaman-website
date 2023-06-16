import React from 'react'
import "./Testimonial.css"
import blog1 from "../../images/blog1.jpg"
import aboutimg from "../../images/aboutimg.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Testimonial = () => {
  const clients = [
    {
      img: blog1,
      heading: "REACT ADMIN-PANEL",
      href: "https://adminpanel-c7t.pages.dev/",
      review:
        "We are incredibly fortunate to have Zaman Zahoor as our social media manager and content creator. Their creative vision and strategic approach have transformed our online presence, resulting in a significant increase in engagement and brand awareness. Their ability to consistently deliver high-quality content and effectively manage our social media channels has exceeded our expectations. Zaman Zahoor is an invaluable asset to our team, and we highly recommend their expertise to any company looking to elevate their social media strategy. [Felix-Hawk]",
    },
    {
      img: aboutimg,
      heading: "REACT RECIPE-APP",
      href: "https://waleed0260.github.io/my-recipe-app/",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eveniet in dicta veniam optio expedita nostrum obcaecati similique quas architecto voluptates, voluptate sequi sapiente quod fugiat veritatis ipsam possimus voluptatibus.",
    },
    {
      img: blog1,
      heading: "REACT ADMIN-PANEL",
      href: "https://adminpanel-c7t.pages.dev/",
      review:
        "I am incredibly proud of Zaman Zahoor is growth and accomplishments as a digital marketing learner. Their dedication, enthusiasm, and commitment to mastering the various aspects of digital marketing have been truly impressive. Throughout the course, Zaman Zahoor consistently exceeded expectations, tackling every task with a high level of professionalism and creativity. Their ability to grasp complex concepts and apply them effectively in real-world scenarios is commendable. I have no doubt that Zaman Zahoor has a bright future ahead in the field of digital marketing, and I wholeheartedly endorse their skills and expertise." - [CINDY].",
    },
    {
      img: aboutimg,
      heading: "REACT RECIPE-APP",
      href: "https://waleed0260.github.io/my-recipe-app/",
      review:
"Working with Zaman Zahoor as our Google Ads expert has been a game-changer for our e-commerce business. Their deep knowledge and strategic approach to Google Ads have significantly increased our online visibility, driving a substantial boost in traffic and conversions. Their expertise and dedication have proven invaluable, and we highly recommend Zaman Zahoor to any company looking to achieve remarkable results with Google Ads." - [CEO of ELO],
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
