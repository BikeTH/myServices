import React from "react";
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import { MdSecurity, MdOutlineWeb } from "react-icons/md";
import { TbLanguageHiragana } from "react-icons/tb";
import 'react-vertical-timeline-component/style.min.css'
import './timeline.css'

const object = [
    {
        id: 1,
        title: "Security Certification",
        description: "I am determined to enroll in a related Security Operations Center (SoC) certification program to elevate my expertise and capabilities in threat detection, incident response, and cybersecurity strategy. Ensuring effective monitoring, analysis, and mitigation of security risks across digital environments.",
        date: "Around June",
        icon: <MdSecurity />
    },
    {
        id: 2,
        title: "Web development (Frontend)",
        description: "My goal is to become proficient in React.js and other frontend technologies like Vue.js or Next.js. I also aim to learn a few CSS frameworks to enhance my frontend development skills. Additionally, I may delve into backend development for database management or server-side functionality",
        date: "Around September",
        icon: <MdOutlineWeb />
    },
    {
        id: 3,
        title: "JLPT N3",
        description: "I am determined to learn Japanese and aim to achieve at least JLPT N3 proficiency.",
        date: "Around December",
        icon: <TbLanguageHiragana />
    }
]

export default function timeline(){
    return(
        <div className="timeline">
            <VerticalTimeline lineColor="white">
        {object.map(data => (
                <VerticalTimelineElement className='vertical-timeline-element' 
                key={data.id} 
                iconStyle={{background: '#000', color:'#fff'}} 
                icon={data.icon}
                contentStyle={{background: 'black'}}
                >
                    <h1 className="vertical-timeline-element-title">{data.title}</h1>
                    <p className="vertical-timeline-element-description">{data.description}</p>
                    <span className="vertical-timeline-element-date">{data.date}</span>
                </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
        </div>
    )
}