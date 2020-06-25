import React from 'react';
import style from './Gallery.module.css'

const Gallery = props => {
    let images = props.img.map(img => {
        return <div key={img.date} className={style.galleryItem}>
            <img className={style.galleryImage} src={img.url} alt="" />
            <p>Date: {img.date}</p>
        </div>
    });
    return (
        <div className={style.wrapper}>
            <h1>Gallery</h1>
            <div className={style.gallery}>
                {images.length > 0 ?images : <p>You didn't add images</p>}
            </div>
        </div>
    )
}

export default Gallery;