import React from 'react';
import Modal from 'react-modal';
import { pixelArtList } from '../data/pixelArtList';
import '../style/Modals.css';

// pixelArtList = ({images}) => {};

function ModalPixelArt(){
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <article id="modalpixelart">
                <div className='single-pixelart'>
                    {pixelArtList.map((item) => (
                        <div key={item.id}>
                            <img src={item.src}  alt={item.alt} onClick={openModal}/>
                        </div>
                    ))}
                </div>
            </article>
            <article id="modal-open">
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <h3 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h3>
                        
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                </Modal>
            </article>
        </div>
    );
}

export default ModalPixelArt