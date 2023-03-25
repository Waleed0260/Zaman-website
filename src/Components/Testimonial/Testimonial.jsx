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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eligendi reiciendis incidunt, eos nam aut architecto quasi voluptates facilis nesciunt dolor qui in quibusdam enim optio amet illo modi consequatur, provident placeat a! Ullam, nisi. Quisquam adipisci nulla quaerat sed.",
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
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eveniet in dicta veniam optio expedita nostrum obcaecati similique quas architecto voluptates, voluptate sequi sapiente quod fugiat veritatis ipsam possimus voluptatibus.",
    },
    {
      img: aboutimg,
      heading: "REACT RECIPE-APP",
      href: "https://waleed0260.github.io/my-recipe-app/",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eveniet in dicta veniam optio expedita nostrum obcaecati similique quas architecto voluptates, voluptate sequi sapiente quod fugiat veritatis ipsam possimus voluptatibus.",
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
