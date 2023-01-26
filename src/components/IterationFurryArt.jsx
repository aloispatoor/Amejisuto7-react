import React from "react";
import '../style/Modals.css';

const IterationFurryArt = ({images}) => {

    return (
        <div id='iterationfurryart'>
            {images.map((item) =>(
                <a key={item.id} href={`/furryart/${item.id}`} className="img-sizing">
                    <img src={item.src} alt={item.alt}/>
                </a>
            ))}
        </div>
    )
}

export default IterationFurryArt