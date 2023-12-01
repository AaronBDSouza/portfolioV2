import { useState } from 'react';
import './about.scss'

export default function About() {

    const [message,setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="about" id="about">
            <h1>About me.</h1>
            <div className="aboutWrapper">
                <div className="left">
                    <div className="aboutImage">

                    </div>
                    {/* <img className="aboutImage" src="assets/dp5_300px.jpg" alt="profile_picture"/> */}
                </div>
                <div className="right">
                    <p>Hi, Welcome to my Website! I am a Full Stack Developer & enjoy building smart metadata driven Web Applications. I'm always eager to learn something new everyday & apply my knowledge to build stuff that can create a positive impact in the World. </p>  
                    <p>I have 2+ years of experience in developing interactive and responsive Web Applications in PHP, the MERN Stack & Automation Scripts in Python. I'm a dedicated developer with a problem solving attitude and have experience in designing UIs, Backend, API implementation, Automation, Database Integration & Deployment. I have worked on projects across multiple domains like Insurance, E-commerce, Enterprise, Hospitality, 3D Printing, etc with some amazing teams!</p>
                </div>
            </div>
        </div>
    )
}
