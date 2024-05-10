import React from "react";
import "./About.css";
import CarouselExp from "../../components/carousel/CarouselExp";
import CarouselOut from "../../components/carousel/CarouselOut";
import CarouselIn from "../../components/carousel/CarouselIn";
import TimeLine from "../../components/timeline/timeline";
import Programming from "../../components/skills/hardskill/ProgrammingBar";
import Language from "../../components/skills/language/Language";
import Footer from "../../components/footer/Footer";
import { ReactTyped } from "react-typed";

export default function About() {
    return(
        <>
            <div className="about-title">
                <h1>ABOUT ME</h1>
            </div>
            <div className="about-introduction">
                <p className="introduction"><ReactTyped style={{color:"#9fef00"}}strings={["Yo! You can call me ", "你好啊！可以叫我, ", "やあ! 私は "]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop/>
                    Wilfred,</p> 
                <p className="introduction">I graduated from <span style={{color:"yellow"}}>Curtin University</span>, BSc Major in <span style={{color:"#9fef00"}}>CyberSecurity</span>.</p>
                <p className= "introduction">If you're <span style={{color:"#9fef00"}}>looking</span> for a versatile team player who thrives in both the <span style={{color:"red"}}>security</span> realm and the <span style={{color:"#9fef00"}}>creative</span> landscape of Web development, 
                I'd love to <span style={{color:"cyan"}}>Connect</span> and discuss how I can contribute to your tech department's success.</p>
                <div className="about-experience">
                    <h1>My Experience</h1>
                </div>
                <div className="carousel-experience">
                    <CarouselExp />
                </div>
                <div className="about-skilled">
                    <h1>Skills</h1>
                    <div className="soft-skill">
                        <Programming />
                    </div>
                    <div className="soft-skill">
                        <Language />
                    </div>
                </div>
                <div className="about-goal">
                    <h1>2024 Goal</h1>
                    <div className="goal-container">
                        <TimeLine />
                    </div>
                </div>
                <div className="about-interest">
                    <h1>Personal Interest</h1>
                    <div className="side-by-interest">
                        <div className="carousel-container">
                            <CarouselIn />
                        </div>
                        <div className="carousel-container">
                            <CarouselOut />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}