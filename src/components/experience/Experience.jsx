import { useState, useMemo } from 'react';
import './experience.scss';
import { companyExperienceData, jobDescriptionData } from '../../portfolioData';

export default function Experience() {
   let [previousSelectedElementDiv, setPreviousSelectedElementDiv] = useState(null);
   let selectedCompany = "";
   let jobDescriptionHTML = null;
   let timePointTopCSSValue = 60;
   let [prevCDiv, setPrevCDiv] = useState(null);

    async function onCompanySelection (e, value) {
        selectedCompany = value;
        let element = document.getElementById(value);
        let CDiv = document.getElementById("cdiv"+value);

        if(element !== null && element !== undefined) {
            if(previousSelectedElementDiv === null) {
                element.classList.add("selected");
                setPreviousSelectedElementDiv(element);
            }
            else{
                previousSelectedElementDiv.classList.remove("selected");
                element.classList.add("selected");
                setPreviousSelectedElementDiv(element);
            }
        }

        if(prevCDiv !== null) {
            prevCDiv.classList.remove("selected");
            CDiv.classList.add("selected");
        }
        else{
            CDiv.classList.add("selected");
        }
        setPrevCDiv(CDiv);
        
        await getJobDescriptionDetails();
        await setJobDescriptionDetails();
    }



    function initializeCompanySelectionOnRender() {
        let parallelElement = null;
        companyExperienceData.map((dataItem, index) => (
            index === 0 ? (
                parallelElement = document.getElementById(dataItem[0]?.value),
                parallelElement !== undefined ?  
                (   parallelElement.classList.add("selected"),
                    setPreviousSelectedElementDiv(parallelElement),
                    selectedCompany = dataItem[0]?.value,
                    getJobDescriptionDetails(),
                    setJobDescriptionDetails()
                ) 
                : null
            ) 
            : null
        ));
    }

    const getJobDescriptionDetails = async()  => {
        jobDescriptionData.map((dataItems) => (
            dataItems.map((dataItem) => (
                dataItem?.code === selectedCompany ? (
                    jobDescriptionHTML = dataItem?.textData
                )
                : null
            ))
        ))
    }

    const setJobDescriptionDetails = async()  => {
        let p = "";
        if(jobDescriptionHTML !== null) {
            jobDescriptionHTML.map((textItems) => {
                 p = p + "<li>"+textItems.text+"</li><br/>";
            })
        }
        document.getElementById("jobDescriptionTarget").innerHTML = p;
    }

    useMemo(
        () => (
            window.onload = function() {
                initializeCompanySelectionOnRender();
            }
        ),
        []
    );

  return (
    <div className="experience" id="experience">
        <h1>Experience & Projects</h1>
        <div className="columns">
            <div className="left">
                <div className="listWrapper">
                    <div className="listHeader">
                        <span className="yearsExperience">2Y+</span>
                        <span className="listTitle">Company Experience</span>
                    </div>
                    {companyExperienceData.map((dataItems, index) => (
                        dataItems.map((dataItem) => (
                            <div key={index} className="listItem">
                                <div className="listItemDetails">
                                    <span className="jobYear">{dataItem?.year}</span>
                                    <ul className="companyDetails" id={"cdiv"+dataItem?.value}>
                                        <li>
                                            <span className="jobProfile">{dataItem?.role}</span>
                                        </li>
                                        <li>
                                            <span className="companyName">{dataItem?.company}</span>
                                        </li>
                                        <li>
                                            <span className="companyAddress">{dataItem?.address}</span>
                                        </li>
                                    </ul>
                                    {/* <input
                                        className="companySelectionButton" 
                                        type="radio" 
                                        name="company" 
                                        value={dataItem?.value} 
                                        onClick={(e) => {onCompanySelection(e, dataItem?.value)}}
                                    /> */}
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </div>

            <div className="middle">
                <div className="timelineContainer">
                    <div className="timelineContainerWrapper">
                        <div className="currentMarker">
                            2023
                        </div>
                        <div className="timelineWrapper">
                            <div className="timeline"> 
                            </div>
                            <div className="timePointContainer">
                                {companyExperienceData.map((dataItems, index) => (
                                    index > 0 ? timePointTopCSSValue = timePointTopCSSValue + 70 : timePointTopCSSValue,
                                    dataItems.map((dataItem) => (
                                        <div
                                            key={index} 
                                            className="timePoint"
                                            // style={{top:`${timePointTopCSSValue}px`}}
                                            id={dataItem?.value}
                                            value={dataItem?.value}
                                            onClick={(e) => {onCompanySelection(e, dataItem?.value)}}
                                        >
                                        </div>
                                    ))
                                ))}
                            </div> 
                        </div>
                        <div className="startMarker">
                            2020
                        </div>  
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="listWrapper">
                    <div className="listHeader">
                        <span className="listTitle">Job Description</span>
                    </div>
                    <div>
                        <ul className="jobDescriptionTarget" id="jobDescriptionTarget">Test</ul>
                    </div>
                </div>
            </div>
        </div>
        <span className="companyNdaDisclaimer">Note :- The company information listed above is in compliance with their respective NDAs (Non Disclosure Agreements).</span>
    </div>
  )
}


// <li>
//                         Gained experience in developing dynamic applications
// based on metadata configuration & client requirements.
//                         </li>
//                         <br/>
//                         <li>Worked on Enterprise Software development in UI
// designing, functionality migration and API Integration.</li>
//                         <br/>
//                         <li>Tech Stack:- React, Angular, Node, Java, Sencha Ext JS</li>