import React from 'react';
import style from './Gallery.module.css'

const Gallery = props => {
    let images = props.img.map(img => {
        return <div key={img.date}>
            <img src={img.url} alt=""/>
            <p>Date: {img.date}</p>
        </div>
    });
    return (
        <div className={style.wrapper}>
            <h1>Gallery</h1>
            <div className={"container " + style.gallery}>
                {images}
            </div>
        </div>
    )
}

export default Gallery;