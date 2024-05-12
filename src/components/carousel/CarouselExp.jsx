import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import "./Carousel.css";

const slider = [
    {
        id: 1,
        title: "Operation Engineer",
        description: 
        "With more than a year of dedicated experience in IT operations, I've honed my skills in monitoring job batches across mainframe and midrange systems to maintain seamless performance and reliability. My daily tasks involve AS400 daily tape duplication and IPL reboot, quarterly vulnerability reporting, managing tickets in ServiceNOW, performing window security patching, and resolving job-related issues on mainframe and midrange systems by referencing relevant documentation.",
        tool:"Tool: Zabbix, Crowdstrike, BMC Control-M",
    },
    {
        id: 2,
        title: "CyberSecurity Operator",
        description: "My journey expanded into the realm of cybersecurity, where I spent 5-6 months as a cybersecurity operator, actively defending against threats and safeguarding digital assets. This experience heightened my awareness of security protocols and best practices, contributing to a robust defense strategy.",
        descriptionSupport: "Amidst this fast-paced environment, I also meticulously prepared monthly reports and continuously updated our Standard Operating Procedure (SOP) documents, ensuring our team was always armed with the latest strategies and insights. This cybersecurity journey was not just a job but a passion, where each day brought new challenges and opportunities to fortify our digital defenses.",
        tool:"Tool: WebOrion, Constella, Solarwind, MS365",
    },
    {
        id: 3,
        title: "CyberSecurity Engagement Coordinator",
        description: "As an engagement coordinator for about 3 months, I honed my communication and organizational skills, facilitating smooth collaborations between teams and stakeholders, resulting in efficient project execution.",
        descriptionSupport:"Types of project I had involved as a SPOC were Vulnerability Assessment, Network Pentest, Web Application Pentest (Greybox & Blackbox), Mobile App pentest, Red Teaming simulation",
        tool:"Tool: Microsoft Project",
    }
];

export default function CarouselExp(){
    return(
        <div className='carousel'>
            <Swiper className='swipper' modules={[Pagination, EffectCoverflow, Autoplay]}
                style={{"--swiper-pagination-color": "#9fef00",
                "--swiper-pagination-bullet-inactive-color": "white",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "8px",
                "--swiper-pagination-bullet-horizontal-gap": "6px"}}
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
                {slider.map(data => (
                    <SwiperSlide key={data.id} style={{/*backgroundImage: `url(${data.url})`*/ backgroundColor: '#333333'}} className='info-swipper-experience'>
                        <div>
                            <h2 className='experience-title'>{data.title}</h2>
                            <p className='experience-jd'>{data.description}</p>
                            <p className='experience-jd'>{data.descriptionSupport}</p>
                            <li className='experience-tool'>{data.tool}</li>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}