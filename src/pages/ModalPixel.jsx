import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pixelArtList } from '../data/pixelArtList'

const Modal = ({images}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);
    const image = images[id];

    if (!image) return <p>Image not found!</p>;

    function goBack(){
        navigate(-1);
    }

    return (
        <article className="modal-overlay">
            <div className="modal-body pixel-modal">
                <img src={image.src} alt={image.alt} />
                <button className="modal-close-button" onClick={goBack}>✖</button>
            </div>
        </article>
    )
}

function RenderModalPixel(){
    return <Modal images={pixelArtList}/>
}

export default RenderModalPixel