import React, { useEffect, useState } from 'react'
import ProjectListItems from "../projectsListItems/ProjectsListItems";
import './projectsList.scss';
import { featuredProjectData, latestProjectData, functionalityProjectData, designProjectData  } from '../../projectData';
import { Navigate } from "react-router-dom";

export default function ProjectsList() {
    const [selected, setSelected] = useState('featured');
    const [categoryData, setCategoryData] = useState([]);   
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "latest",
            title: "Latest"
        },
        {
            id: "functionality",
            title: "Functionality"
        },
        {
            id: "design",
            title: "Design"
        }   
    ];

    useEffect(() => {
        switch(selected){
            case "featured":
                setCategoryData(featuredProjectData);
                break;
            case "latest":
                setCategoryData(latestProjectData);
                break;
            case "functionality":
                setCategoryData(functionalityProjectData);
                break;
            case "design":
                setCategoryData(designProjectData);
                break;      
            default:
                setCategoryData(featuredProjectData);
                break;              
        }

    },[selected]);

    const handleProjectItemClick =(imgID) => {
        alert(imgID);
        <Navigate
            to={{
            pathname: "/projectViewer",
            state: { property_id: imgID }
          }}
        />
    }

    return (
        <div className="projectsList" id="projectsList">
            <h1>Projects</h1>
            <ul>
                { list.map((item) => (
                    <ProjectListItems 
                    id = {item.id}
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}/>
                ))}
            </ul>
            <div className="outerContainer">
                <div className="container">
                    {categoryData.map((dataItem) => (
                    <div className="item">
                        <img src={dataItem.img} alt={dataItem.title} onClick={() => handleProjectItemClick(dataItem.id)}/>
                        <h3>{dataItem.title}</h3>
                    </div>   
                    ))}          
                </div>
            </div>
            <h2 className="loadingText">Loading Projects... Initializing Server...</h2>
        </div>
    )
}
