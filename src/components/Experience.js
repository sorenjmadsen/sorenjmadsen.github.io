import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-3">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>2021-Present: Cisco</h2>
                        <h4>Software Engineer</h4>
                        {/* <p>Cisco is a multinational technology conglomerate developing cutting-edge communications equipment in the areas of networking hardware and software, and they provide innovative SDN, cloud, and security solutions to major businesses all over the world. Cisco solutions have provided the infrastructure for modern data centers to perform at the highest capability.</p> */}
                        <p>My work at Cisco revolves around the development of the APIC controllers for both cloud and hardware solutions. The APIC controllers manage Cisco infrastructure and distribution of network management parameters to devices in the networking fabric based on intelligent analysis of the customers’ application demands. In this development, I have enhanced and maintained critical infrastructure for Cisco customers, while integrating the latest security practices. Through this work, I have gained great experience in securing the AAA mechanisms in the controllers to provide customers with peace of mind through secure network devices.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>2020: meedio</h2>
                        <h4>Software Engineer</h4>
                        {/* <p>Previously known as Speak A/S, meedio is a Danish startup breaking ground in the communications field. A new competitor to the likes of Zoom, meedio is revolutionizing the way in which we communicate on a daily basis. By combining the use of phone lines, VoIP, and video calls, meedio seamlessly consolidates all reachable endpoints for an individual contact into a single “call” button. Thus, any contact made by an individual will probe all forms of communication in the provided contact. This makes it easy to participate in a one-one or a conference call from a phone, laptop, or mobile device, and effortlessly switch between them at any point.</p> */}
                        <p>The contributions I made at meedio culminated in a proof-of-concept design for end-to-end encrypted web calls. I worked closely with the web development team to determine use cases and requirements of the cryptosystem and ultimately moved ahead with the implementation of the Signal protocol using React. The Signal protocol’s robust 3XECDH and double-ratchet encryption system provide users with exceptional forward secrecy and end-to-end encryption.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>2019-2020: SIOTLAB</h2>
                        <h4>Undergraduate Research Assistant</h4>
                        {/* <p>The SIOTLAB is Santa Clara University’s premier IoT lab run by distinguished professors Dr. Behnam Dezfouli and Dr. Yuhong Liu. Much of the work in this lab focuses on security of devices as well as innovate power-saving and low-power techniques in edge devices.</p> */}
                        <p>While I was a research assistant, I focused much of my work on cyber security strategies and solutions for IoT systems. The first project I worked on was based in the search for performing faster, more efficient deep packet inspection and intrusion detection. To do this, we focused on the use of Intel’s Data Plane Development Kit to bypass the kernel and remove needless abstraction to the HW layer. Later, I pivoted my work to assist on a doctoral candidate’s thesis analyzing the effect of DDoS attacks on smart home devices through the measurement of power consumption. These measurements were taken when an attack was targeting an individual of the network stack (TCP/IP) with the intention of revealing insights into how attacks may effect battery-powered and low-energy devices. Much of what I learned in this setting was not only how to work effectively in an academic setting, but I also acquired key skills in performing accurate measurements and analyzing research papers.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>2018-2019: LitePoint</h2>
                        <h4>Applications Engineer Intern</h4>
                        {/* <p>LitePoint, a Teradyne corporation, specializes in developing effective and efficient test solutions for the latest wireless technology from 5G to WiFi 7. They are known for the IQ testing lineup which provide some of the highest quality testing to ensure that the next generation of wireless products keeps consumers connected and satisfied.</p> */}
                        <p>In this internship, I spent time attempting to develop a new line of test equipment based on previous research and development done years prior. While working with a confidential third party corporation, we determined that the solution was no longer viable. Throughout the process, I gained great experience in MATLAB while approaching problems using digital signal processing techniques.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
