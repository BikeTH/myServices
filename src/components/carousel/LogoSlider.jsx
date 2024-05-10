import React from "react";
import { EffectFade, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaStackOverflow, FaJava, FaPython, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import "./LogoSlider.css";

const logos =[
    {id: 1, image: <FaHtml5 />,},
    {id: 2, image: <FaCss3 />,},
    {id: 3, image: <FaReact />,},
    {id: 4, image: <FaNodeJs />,},
    {id: 5, image: <FaStackOverflow />,},
    {id: 6, image: <IoLogoJavascript />,},
    {id: 7, image: <FaJava />,},
    {id: 8, image: <FaPython />,},
    {id: 9, image: <TbBrandCpp />,},
    {id: 10, image: <FaGithub />,}
]

export default function LogoSlider(){
    return(
        <div className="home-logo-slider">
            <Swiper modules={[EffectFade, Autoplay]}
            autoplay={{delay:2000, disableOnInteraction: false }}
            allowTouchMove={false}
            loop={true}
            slidesPerView={5}
            spaceBetween={30}
                >
                    {logos.map((logo) => (
                        <SwiperSlide key={logo.id}>
                            <div className="logo-slider-styling">{logo.image}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    )
}