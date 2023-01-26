import React from "react";
import { useParams } from "react-router-dom";

function ModalPixel(images){
    const { id } = useParams();
    console.log(id);
    const image = images[id];

    if (!image) return <p>Image not found!</p>;

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <img src={image.src} alt={image.alt} />
                <button className="modal-close-button" href="/pixelart" aria-label="Close">✖</button>
            </div>
        </div>
    )
}

export default ModalPixel