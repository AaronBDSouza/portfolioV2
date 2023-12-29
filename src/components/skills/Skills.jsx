import { useState } from 'react';
import './skills.scss';
import CardPopUp from "../cardPopUP/CardPopUp";
import { skillsImages, skillsData, featuresData, charactersData } from '../../portfolioData';

export default function Skills() {
    const [displayCardPopUP, setDisplayCardPopUP] = useState(false);
    let [cardPopUpPosition, setCardPopUpPosition] = useState([]);
    let [cardPopUpDetails, setCardPopUpDetails] = useState([]);

    const cardPopUpShow = async (e, type, label, rating) => {
        if(displayCardPopUP) {
            setDisplayCardPopUP(false);
        }   

        if(!displayCardPopUP) {
            const tooltiptext = document.getElementById('tooltiptext'); 
            tooltiptext.style.visibility = 'hidden';
            let positions =  await getCardPopUpPosition(e);
            let x = positions.top + window.scrollY;
            let y = positions.left + window.scrollX;
            let width = positions.width;
            let height = positions.height;
            setCardPopUpPosition([x,y,width, height]);
            setCardPopUpDetails([type, label, rating]);
            setDisplayCardPopUP(true);
        }
    }

    function cardPopUpHide() {
        setDisplayCardPopUP(false);
    }

    const getCardPopUpPosition = async (e) => {
        let positions = await e.target.getBoundingClientRect();
        return positions;
    }

    function componentListener(e) {
        if(displayCardPopUP && e.target.className !== "cardListItem"){
            setDisplayCardPopUP(false);
        }
    }

    return (
        <div className="skills" id="skills" onClick={(e) => {componentListener(e)}}>
            <h1>Skills & Technologies</h1>
            <div className="skillsWrapper">
                <div className="top">
                    <div className="skillsImages">
                        {skillsImages.map((dataItem) => (
                            <div key={dataItem?.alt} className="skillImage">
                                <img src={dataItem?.img} alt={dataItem?.alt}/>
                                <div className="skillImageText">
                                    <span>{dataItem?.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bottom">
                    <div className="left">
                        <span id="tooltiptext" className="tooltiptext">Hover for Rating</span>
                        <div className="listWrapper">
                            <div className="listHeader">Skills & Technology
                            </div>
                            <ul>
                                {skillsData.map((dataItems, index) => (
                                    <li key={index}>
                                        {dataItems.map((dataItem, index) => (
                                            <span 
                                                key={index}
                                                className="cardListItem"
                                                onClick={(e) => {cardPopUpShow(e, dataItem?.name, dataItem?.label, dataItem?.rating)}} 
                                                onMouseOver={(e) => {cardPopUpShow(e, dataItem?.name, dataItem?.label, dataItem?.rating)}}
                                                onMouseOut={() => {cardPopUpHide()}}
                                            >
                                                { dataItem?.label }
                                            </span>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                            <div className="userHint">( Hover for Rating )</div>
                        </div>
                    </div>

                    <div className="middle">
                        <div className="listWrapper">
                            <div className="listHeader">Features Implementation</div>    
                            <ul>
                                {featuresData.map((dataItems, index) => (
                                    <li key={index}>
                                        {dataItems.map((dataItem, index) => (
                                            <span 
                                                key={index}
                                            >
                                                { dataItem?.feature }
                                            </span>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="right">
                        <div className="listWrapper">
                            <div className="listHeader">Character Strengths</div>
                            <ul>
                                {charactersData.map((dataItems, index) => (
                                    <li key={index}>
                                        {dataItems.map((dataItem, index) => (
                                            <span 
                                                key={index}
                                            >
                                                { dataItem?.character }
                                            </span>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
                {displayCardPopUP &&
                <CardPopUp
                    position = {cardPopUpPosition}
                    details = {cardPopUpDetails}
                />
                }
            </div>
        </div>
    )
}
