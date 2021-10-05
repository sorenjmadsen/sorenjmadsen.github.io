import React from 'react'
import profile from "../profile.png"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12 img-col">
                    <div className="photo-wrap">
                        <img className="profile-img mb-3" src={profile} alt="Author photo"/>
                        
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>Hello, and welcome to my page! Here you’ll be able to see my own take on the digital portfolio. With sites like LinkedIn making it easy to create a boring, cookie cutter, profile page, I thought it would be much nicer to design one myself! </p>
                    <p>As for me, my name is Soren (hopefully made clear already), and I’m currently a Software Engineer for Cisco working on the Enterprise Cloud Networking team to enhance the security of network controllers. Just before I took the job, I graduated from Santa Clara University with a B.S. in Computer Science and Engineering, and through my degree, I acquired key skills to thrive as a developer. While I’ve spent a lot of my time involved in cyber security, I am currently pursuing all things AI/ML. I’ve become obsessed with various forms of image and audio classification, and I see the breadth of this field as one large ocean into which I can’t help but dive deep. In my free time, I love to surf, play the guitar, free dive, spearfish, and hike out in nature! I hope to one day connect my work as a developer to something meaningful that helps the planet. 🌲</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
