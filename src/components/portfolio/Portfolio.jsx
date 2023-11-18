import './portfolio.scss'
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from 'react';
import { featuredPortfolioData, softwarePortfolioData, webPortfolioData, mobilePortfolioData, designPortfolioData  } from '../../portfolioData';
import { useEffect } from 'react';
import { data } from 'browserslist';

export default function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const [categoryData, setCategoryData] = useState([]);   
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "software",
            title: "Software Applications"
        },
        {
            id: "web",
            title: "Web Applications"
        },
        {
            id: "mobile",
            title: "Mobile Apps"
        },
        {
            id: "design",
            title: "Graphic Designs"
        }        
    ];

    useEffect(() => {
        switch(selected){
            case "featured":
                setCategoryData(featuredPortfolioData);
                break;
            case "software":
                setCategoryData(softwarePortfolioData);
                break;
            case "web":
                setCategoryData(webPortfolioData);
                break;
            case "mobile":
                setCategoryData(mobilePortfolioData);
                break;
            case "design":
                setCategoryData(designPortfolioData);
                break;      
            default:
                setCategoryData(featuredPortfolioData);
                break;              
        }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                { list.map((item) => (
                    <PortfolioList 
                    id = {item.id}
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}/>
                ))}
            </ul>
            <div className="container">
                {categoryData.map((dataItem) => (
                <div className="item">
                    <img src={dataItem.img} alt={dataItem.title}/>
                    <h3>{dataItem.title}</h3>
                </div>   
                ))}          
            </div>
        </div>
    )
}
