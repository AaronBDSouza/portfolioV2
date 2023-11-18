import './gallery.scss'
import { useState } from 'react';
import { galleryData } from '../../galleryData';
import GalleryImageViewer from '../galleryImageViewer/GalleryImageViewer';

export default function Gallery() {
    //For Slider Display
    var screenWidth = parseInt(window.innerWidth);
    const[nosOfSlidesInView, setNosOfSlidesInView] = useState(3);
    const [currentSlide, setCurrentSlide] = useState(0);

    //For ImageViewer
    const [fullScreenImageActive, setFullScreenImageActive] = useState(false);
    const [selectedImgSrc, setSelectedImgSrc ] = useState('');
    const [selectedImgTitle, setSelectedImgTitle ] = useState('');

    //Function controls no. of images displayed based on screen width
    const handleClick = (direction) => {

        //if screen width small than show 1 or 2 images in visible port else 3 
        screenWidth <= 768? setNosOfSlidesInView(screenWidth <= 550? 1:2): setNosOfSlidesInView(3)

        //left right arrow btn logic
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1: galleryData.length - nosOfSlidesInView) :
        setCurrentSlide(currentSlide < galleryData.length - nosOfSlidesInView ? currentSlide + 1: 0)       
    }

    //Sets selected img's details to the assigned variables
    const handleImageClick = (imgSrc,title) => {
        setFullScreenImageActive(true);
        setSelectedImgSrc(imgSrc);
        setSelectedImgTitle(title);
    }


    return (
        <div className="gallery" id="gallery">
            {/* Left Arrow Section */}
            <span className="arrowContainer left"></span>
            <img src="assets/left_arrow.png" alt="left" className="arrow left" onClick={() => handleClick("left")}/> 

            {/* Section Header */}
            <h1>Gallery</h1>

            {/* Right Arrow Section */}
            <span className="arrowContainer right"></span>
            <img src="assets/left_arrow.png" alt="right" className="arrow right" onClick={() => handleClick("right")}/>
            
            {/* Slideshow for Medium to Large Screens */}                 
            <div className="slider" style={ (screenWidth > 768? {transform: `translateX(-${currentSlide * 430}px)`}: {transform: `translateX(-${currentSlide * 290}px)`})}>
                {   galleryData.map((sliderItem) => (
                <div className="container">
                    <div className="item">
                        <div className="top">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={sliderItem.img} alt={sliderItem.title} onClick={() =>  handleImageClick(sliderItem.img,sliderItem.title)}/>
                                </div>
                            </div>
                        </div>

                        <div className="bottom">
                            <h2>{sliderItem.title}</h2>
                            <h4>{sliderItem.year + ', ' + sliderItem.location}</h4>
                        </div> 
                    </div>
                </div>
                ))}
            </div>

            {/* FullScreenImageView - Sends Img details to GalleryImageViewer Component*/}
            { fullScreenImageActive ? 
            <GalleryImageViewer 
            fullScreenImageActive={fullScreenImageActive}
            selectedImgSrc={selectedImgSrc}
            selectedImgTitle={selectedImgTitle}
            setFullScreenImageActive={setFullScreenImageActive}/> : ''}
            
        </div>
    )
}


