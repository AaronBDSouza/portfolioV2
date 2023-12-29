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
            strings: [
                'Web Applications Developer',
                'MERN Stack, PHP & Python',
                'Graphics Designer',
                'Programming & Technology Enthusiast',
            ]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <IntroCube/>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1 className="nameH1">Aaron B. D'Souza</h1>
                    <h4>B.C.A, M.Sc. IT</h4>
                    <h3>   <span className="dynamicText" ref={textRef}></span></h3>
                </div>
                <a className="doubleArrow" href="#portfolio">
                    <DoubleArrow style={{ fontSize: 50 }}/> 
                </a>
            </div>
        </div>
    )
}
