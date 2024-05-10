import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/autoplay';
import "./Carousel.css";
import skateboard from "../../../src/assets/image/skateboard.jpg"
import badminton from "../../../src/assets/image/badminton.jpeg"
import jogging from "../../../src/assets/image/jogging.jpg"
import { TbSkateboard } from "react-icons/tb";
import { GiShuttlecock } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";

const slider = [
    {
        id:1 ,
        description: "> Stay relentless",
        image: skateboard,
        logo: <TbSkateboard />,
    },
    {
        id: 2,
        description: "> Reflexes and Agility",
        image: badminton,
        logo: <GiShuttlecock />,
    },
    {
        id: 3,
        description: "> Self-Esteem",
        image: jogging,
        logo: <FaRunning />,
    }
]

export default function CarouselOut(){
    return(
        <div className='carousel-interestOut'>
            <Swiper className='swipper' modules={[Pagination, EffectCoverflow, Autoplay]}
            style={{"--swiper-pagination-color": "#D32F2F",
            "--swiper-pagination-bullet-inactive-color": "white",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "6px"}}
            autoplay={{delay:5000, disableOnInteraction: false, pauseOnMouseEnter: true,}}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true
            }}
            loop={true}
            pagination={{clickable:true}}
            slidesPerView={1}
            >
                {
                    slider.map(data => (
                        <SwiperSlide key={data.id} style={{backgroundImage: `url(${data.image})`}} className='interest-swipper'>
                            <span className="carousel-logo">{data.logo}</span>
                            <span className="carousel-description">{data.description}</span>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}