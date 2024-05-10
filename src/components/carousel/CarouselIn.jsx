import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import "./Carousel.css";
import chess from "../../../src/assets/image/chess.jpg"
import games from "../../../src/assets/image/games.jpg"
import guitar from "../../../src/assets/image/guitar.jpg"
import { FaGuitar, FaChess, FaGamepad } from "react-icons/fa";


const slider = [
    {
        id: 1,
        description: "> Cognitive Skills",
        image: chess,
        logo: <FaChess />
    },
    {
        id: 2,
        description: "> Creative and Imagination",
        image: games,
        logo: <FaGamepad />
    },
    {
        id: 3,
        description: "> Improved Concentration",
        image: guitar,
        logo: <FaGuitar />
    }
]

export default function CarouselIn(){
    return(
        <div className='carousel-interest'>
            <Swiper className='swipper' modules={[Pagination, EffectCoverflow, Autoplay]}
            style={{"--swiper-pagination-color": "#007b99",
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