import React from 'react';
import Modal from 'react-modal';
import '../style/Modals.css';

function ModalPixelArt(){

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function ArtList(props){
        const artList = (
            props.pixelArtList.map((items) => (
                <div className='img-container' key={items.id} onClick={openModal}>
                    <img src={items.src}  alt={items.alt}/>
                </div>
            ))
        );
        
        return(
            <div className='single-pixelart'>
                {artList}
            </div>
        );
    }

    function Image(props){
        const singleimage = props.pixelArtList.map((item) =>
        <img
            key={item.id}
            id={item.id}
            alt={item.alt}
            src={item.src}
            />
        );

        return(
            <div>
                {singleimage}
            </div>
        );
    }


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <article id="modalpixelart">
                    <ArtList />
            </article>
            <article id="modal-open">
                <Modal
                    isOpen={modalIsOpen}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={closeModal}
                    contentLabel="Modal"
                    style={{
                        overlay: {
                          position: "fixed",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          opacity: 1
                        },
        
                        content: {
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          background: "#004B6B",
                          overflow: "auto",
                          WebkitOverflowScrolling: "touch",
                          borderRadius: "4px",
                          outline: "none"
                        }
                      }}
                >
                    <Image />
                    <div>
                        <button className='blue-button' onClick={closeModal}>close</button>
                    </div>
                </Modal>
            </article>
        </div>
    );
}

export default ModalPixelArt