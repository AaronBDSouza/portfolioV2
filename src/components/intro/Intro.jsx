import './intro.scss'
import {DoubleArrow} from "@material-ui/icons";
import { init } from 'ityped';
import { useEffect,useRef } from 'react';
import IntroCube from "../introCube/IntroCube";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1800,
            backSpeed: 60,
            strings: ['a Web Application Developer.', 'a Graphic Designer.', 'a Programming Enthusiast.'] 
            //strings: ['a Software, Web & Mobile Apps Developer.', 'a Graphic Designer.', 'an AI/ML Enthusiast.'] 

        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <IntroCube/>
                {/* <div className="imagesContainer">
                    <div className="images">
                        <img src="assets/dp.jpg" alt="profile_picture"/>
                        <img src="https://www.frontendforever.com/uploads/assets/img1.jpg"/>
                        <img src="https://www.frontendforever.com/uploads/assets/img2.png"/>
                        <img src="https://www.frontendforever.com/uploads/assets/img3.jpg"/>
                        <img src="https://www.frontendforever.com/uploads/assets/img4.jpg"/>
                        <img src="https://www.frontendforever.com/uploads/assets/wonder5.jpg"/>
                        <img src="https://www.frontendforever.com/uploads/assets/wonder6.jpg"/>
                    </div>
                </div> */}

                {/* <div className="imgContainer" id="img1">
                    <img src="assets/dp.jpg" alt="profile_picture"/>
                </div>
                <div className="imgContainer" id="img2">
                    <img src="assets/dp.jpg" alt="profile_picture"/>
                </div>
                <div className="imgContainer" id="img3">
                    <img src="assets/dp.jpg" alt="profile_picture"/>
                </div> */}

                {/* <div className="imageRibbonContainer">
                    <span class="imageRibbon"></span>
                </div> */}
                
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Aaron B. D'Souza</h1>
                    <h4>B.C.A, M.Sc. IT</h4>
                    <h3>I am <span className="dynamicText" ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <DoubleArrow style={{ fontSize: 50 }}/> 
                </a>
            </div>
        </div>
    )
}
