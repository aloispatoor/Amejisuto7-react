import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import '../style/Modals.css';

const Modal = ({ isShowing, hide, ...props }) =>
    isShowing 
        ? ReactDOM.createPortal(
            <>
                <div className="modal-overlay">
                    <button type="button" className="modal-close-button" onClick={hide}>&times;</button>
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>
            </>,
            document.body) : null;

Modal.propTypes = {
    isShowing: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired
    };

export default Modal;