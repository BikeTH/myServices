import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import LogoSlider from "../../components/carousel/LogoSlider";
import UTC from "../../components/card/services/UTC";
import AssignmentHelper from "../../components/card/services/AssignHelper";
import ComingSoon from "../../components/card/services/ComingSoon";
import UTstructure from "./UTstructure/UT";
import UTcalculator from "./UTstructure/UTCalculator/UTcalculator";
import Footer from "../../components/footer/Footer";
import { SwiperNavNext, SwiperNavPrev } from "../../components/swipperButton/swiperButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import AHstructure from "./AHstructure/AH";
import AHplayground from "./AHstructure/AHplayground/AHplayground";
import sisLogo from "../../assets/logo/sisLogo.png";

export default function Home() {

    function scrollToServices(){
        const servicesAll = document.getElementById('servicesAll');
        servicesAll.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }    

    return(
        <>
            <div className="container-home">
                <h1><img src={sisLogo} alt="SIS Logo" className="sis-logo" /></h1>
                <h1>My Services</h1>
                <p>I provide few services over here that you might be <span style={{fontWeight:'bold'}}>interested</span>!</p>
                <button className="servicesButton" onClick={() => scrollToServices()}>Get started</button>
            </div>
            <div className="home-logo-slider">
                <LogoSlider />
            </div>
            <div id="servicesAll" className="servicesAll">
                <UTC />
                <AssignmentHelper />
                <ComingSoon />
            </div>
        <Swiper className="services-swiper" 
        modules={[Pagination, Navigation]}
        allowTouchMove={false}
        >
            <SwiperSlide>
            <SwiperNavNext />
                <div id="servicesUT" className="servicesUT">
                    <UTstructure />
                    <div className="Intro-UT">
                        <h1>What are Unit Trusts?</h1>
                        <p>Unit trust are investment funds that allow investors to pool their money together to invest in a diversified portfolio of assets such as stocks, bonds, or other securities</p>
                        <p>These funds are managed by professional fund managers who make investment decisions on behalf of the investors.</p>
                    </div>
                    <div className="calculator-UT">
                        <UTcalculator />
                    </div>
                    <div className="Summary-UT">
                        <h1>Is it Worth investing?</h1>
                        <h1>What you should know:</h1>
                        <span>Risk vs Reward:</span>
                        <p>Unit Trust offer potential for higher returns but they also come with higher risk levels</p>
                        <span>Investment Time Horizon:</span>
                        <p>Unit trusts are better suited for long-term investment goals (e.g., 5 years or more) due to their potential for growth and compounding returns over time.</p>
                        <span>Inflation:</span>
                        <p>Inflation erodes the purchasing power of money over time. Unit trusts have the potential to outpace inflation and generate real returns, whereas fixed deposits may struggle to keep up with inflation rates.</p>
                        <h1>Summary</h1>
                        <p>While unit trusts have the potential to generate higher returns over the long run, they also come with higher risks</p>
                        <p>Investors should consider their risk tolerance, investment goals, time horizon, and overall financial situation before deciding between unit trusts and fixed deposits. </p>
                        <p>Consulting with a financial advisor can also provide personalized insights and recommendations based on individual circumstances.</p>
                    </div>
                </div>
                <SwiperNavNext />
            </SwiperSlide>

            {/* Assignment helper*/}

            <SwiperSlide>
                <SwiperNavPrev />
                <div id="servicesAH" className="servicesAH">
                    <AHstructure />
                    <div className="Intro-AH">
                        <h1>Need help?</h1>
                        <p>We are here to support and enhance your academic journey. If you'are seeking for guidance, our platform is here to assist.</p>
                        <p>Let's embark on this learning adventure together, where success is just a click away!</p>
                    </div>
                    <div className="CS-playground">
                        <AHplayground />
                    </div>
                    <div className="Summary-AH">
                        <h1>Still looking for Handhold?</h1>
                        <h1>What you should know:</h1>
                        <span>Trade-offs of Seeking Assignment Handholding:</span>
                        <p>Seeking assignment handholding offers potential for higher quality work and improved understanding, but it also comes with a cost.</p>
                        <span>The Value of Handholding:</span>
                        <p>Handholding can be beneficial for long-term learning goals and customized support, aligning with the potential growth and compounding returns over time.</p>
                        <span>Balancing Ethical Considerations in Seeking Assignment Handholding:</span>
                        <p>Without proper ethical considerations, over-reliance on assignment handholding may erode independent learning skills and hinder personal growth, whereas responsible use can lead to significant learning opportunities.</p>
                        <h1>Summary</h1>
                        <p>While seeking assignment handholding can lead to higher-quality work and learning outcomes, it also comes with potential drawbacks such as dependency and ethical considerations.</p>
                        <p>Students should carefully consider their learning objectives, time horizon, and ethical standards before deciding to seek assignment handholding.</p>
                        <p>Educators or academic advisors can provide personalized guidance and recommendations based on individual circumstances.</p>
                    </div>
                </div>
                <SwiperNavPrev />
            </SwiperSlide>
        </Swiper>
        <div className="Contact-UT">
            <h1>Feel free to reach me out for free consultation!</h1>
                <Link to="/contact" className="contact-button">
                    Contact Me!
                </Link>
        </div>
            <Footer />
        </>
    )
}