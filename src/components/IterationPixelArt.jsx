import React, { useState } from 'react';
import '../style/Modals.css';

const IterationPixelArt = ({images}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (item) => {
        setCurrentImage(item);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null);
    }

    return (
        <div id='iterationpixelart'>
            {images.map((item) =>(
                <span key={item.id} onClick={() => openModal(item)} className="img-sizing" tabindex="0">
                    <img src={item.src} alt={item.alt}/>
                </span>
            ))}
            {isModalOpen && (
                <article className="modal-overlay" onClick={closeModal}>
                <div className="modal-body pixel-modal" onClick={(e) => e.stopPropagation()}>
                    <img src={currentImage.src} alt={currentImage.alt} />
                    <button className="modal-close-button" onClick={closeModal}>✖</button>
                </div>
                </article>
            )}
        </div>
    )   
}

export default IterationPixelArt