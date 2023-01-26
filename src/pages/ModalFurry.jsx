import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { furryArtList } from '../data/furryArtList'

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
            <div className="modal-body furry-art">
                <img src={image.src} alt={image.alt} />
                <button className="modal-close-button" onClick={goBack}>✖</button>
            </div>
        </article>
    )
}

function RenderModalFurry(){
    return <Modal images={furryArtList}/>
}

export default RenderModalFurry