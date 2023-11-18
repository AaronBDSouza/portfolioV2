import React from 'react';
import './galleryImageViewer.scss';

export default function GalleryImageViewer({fullScreenImageActive,selectedImgSrc,selectedImgTitle,setFullScreenImageActive}) {
    return (
            /* FullScreenImageView */
            <div className={ fullScreenImageActive? "fullScreenImageContainer active": "fullScreenImageContainer"}>
                <div className="fullScreenImageContainerBackground">
                </div>
                <div className="imgContainer">
                    <img src ={selectedImgSrc} alt={selectedImgTitle}/>
                    <div className="closeImgDiv">
                        <span className="closeImg" onClick={() => setFullScreenImageActive(false)}>X</span> 
                    </div>
                </div>
            </div>
    )
}
