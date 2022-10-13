import React from "react";
import ReactDOM from "react-dom";
import '../style/Modals.css';

const Modal = ({ isShowing, hide }) =>
    isShowing 
        ? ReactDOM.createPortal(
            <>
                <div className="modal-overlay">
                    <button type="button" className="modal-close-button" onClick={hide}>&times;</button>
                </div>
            </>,
            document.body) : null;

export default Modal;