import React from "react";
import '../style/Modals.css';

const IterationPixelArt = ({images}) => {

    return (
        <div id='iterationpixelart'>
            {images.map((item) =>(
                <a key={item.id} href={`pixelart/${item.id}`} className="img-sizing">
                    <img src={item.src} alt={item.alt}/>
                </a>
            ))}
        </div>
    )   
}

export default IterationPixelArt