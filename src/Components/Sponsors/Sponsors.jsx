import React from 'react'

import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper/modules'
const sponsorList = [
    {
    imgUrl: "/src/assets/images/sponsor/01.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/02.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/03.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/04.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/05.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/06.png",
    },
    ];

    
const Sponsors = () => {
  return (
   <div className="sponsors-section section-bg">
    <div className="container">
        <div className="section-wrapper">
            <div className="sponsor-slider">
                <Swiper modules={[Autoplay]} className='mySwiper' pagination={{ clickable: true }} 
                slidesPerView={2} spaceBetween={30}
                autoplay={{delay:2000,disableOnInteraction:false}}
                breakpoints={{
                     640:{
                        slidesPerView:1,
                        spaceBetween:10
                     },
                     768:{
                        slidesPerView:3,
                        spaceBetween:20
                     },
                     1024:{
                        slidesPerView:4,
                        spaceBetween:30
                     }
                }} >
                    {sponsorList.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.imgUrl} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Sponsors