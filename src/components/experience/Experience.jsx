import { useState, useMemo } from 'react';
import './experience.scss';
import { companyExperienceData, jobDescriptionData } from '../../portfolioData';

export default function Experience() {
   let [selectedCompany, setSelectedCompany] = useState('');
   let [previousSelectedElementInput, setPreviousSelectedElementInput] = useState(null);
   let [previousSelectedElementDiv, setPreviousSelectedElementDiv] = useState(null);
   let [jobDescriptionHTML, setJobDescriptionHTML] = useState(null);
   let [jobDescriptionDataReady, setJobDescriptionDataReady] = useState(false);
   

   let timePointTopCSSValue = 60;

    async function onCompanySelection (e, value) {
        console.log(value);
        let elementType = e?.target?.tagName;
        setSelectedCompany(value);

        if(elementType === 'DIV') {
            let parallelElement = document.querySelectorAll('input[value="'+value+'"]')[0];
            let referenceElement = document.getElementById(value);
            if(parallelElement !== null && parallelElement !== undefined) {
                if(previousSelectedElementDiv === null) {
                    parallelElement.checked = true;
                    referenceElement.classList.add("selected");
                    setPreviousSelectedElementDiv(referenceElement);
                }
                else{
                    previousSelectedElementDiv.classList.remove("selected");
                    parallelElement.checked = true;
                    referenceElement.classList.add("selected");
                    setPreviousSelectedElementDiv(referenceElement);
                }
            }
        }

        if(elementType === 'INPUT') {
            setJobDescriptionDataReady(false);
            let parallelElement = document.getElementById(value);
            if(parallelElement !== null && parallelElement !== undefined) {
                if(previousSelectedElementInput === null) {
                    parallelElement.click();
                    setPreviousSelectedElementInput(parallelElement);
                }
                else{
                    previousSelectedElementInput.classList.remove("selected");
                    parallelElement.click();
                    parallelElement.classList.add("selected");
                    setPreviousSelectedElementInput(parallelElement);
                }
            }
            // getJobDescriptionDetails();
            // setJobDescriptionDataReady(true);
        }

        getJobDescriptionDetails();
        let p = "";
        if(jobDescriptionHTML !== null) {
            jobDescriptionHTML.map((textItems) => {
                // console.log('textItems',textItems);
                 p = p + "<li>"+textItems.text+"</li><br/>";
            })
        }
        document.getElementById("jobDescriptionTarget").innerHTML = p;
    }



    function initializeCompanySelectionOnRender() {
        let referenceElement, parallelElement = null;
        companyExperienceData.map((dataItem, index) => (
            index === 0 ? (
                console.log(dataItem[0]?.value),
                referenceElement = document.querySelectorAll('input[value="'+dataItem[0]?.value+'"]')[0],
                parallelElement = document.getElementById(dataItem[0]?.value),
                console.log(referenceElement, parallelElement),
                referenceElement !== undefined && parallelElement !== undefined ?  
                (   referenceElement.checked = true,
                    parallelElement.classList.add("selected"),
                    setPreviousSelectedElementDiv(parallelElement),
                    setSelectedCompany(dataItem[0]?.value)
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
                    console.log(dataItem?.code, selectedCompany),
                    // console.log(dataItem?.textData),
                    setJobDescriptionHTML(dataItem?.textData)
                )
                : null
            ))
        ))
    }

    const initialRender = useMemo(
        () => (
            window.onload = function() {
                initializeCompanySelectionOnRender();
                setJobDescriptionDataReady(true);
                getJobDescriptionDetails();
                console.log('Initial');
            }
        ),
        []
    );

    // initializeCompanySelectionOnRender();

  return (
    <div className="experience">
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
                                    <ul className="companyDetails">
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
                                    <input
                                        className="companySelectionButton" 
                                        type="radio" 
                                        name="company" 
                                        value={dataItem?.value} 
                                        onClick={(e) => {onCompanySelection(e, dataItem?.value)}}
                                    />
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </div>

            <div className="middle">
                <div className="timeline">
                    <div className="currentMarker">
                        2023
                    </div>
                    {companyExperienceData.map((dataItems, index) => (
                        index > 0 ? timePointTopCSSValue = timePointTopCSSValue + 70 : timePointTopCSSValue,
                        dataItems.map((dataItem) => (
                            <div
                                key={index} 
                                className="timePoint"
                                style={{top:`${timePointTopCSSValue}px`}}
                                id={dataItem?.value}
                                value={dataItem?.value}
                                onClick={(e) => {onCompanySelection(e, dataItem?.value)}}
                            >
                            </div>
                        ))
                    ))}
                    <div className="startMarker">
                        2020
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
        <span className="companyNdaDisclaimer">Note:- The company information listed above is in compliance with their respective NDAs (Non Disclosure Agreements).</span>
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