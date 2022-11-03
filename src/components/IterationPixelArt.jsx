import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import '../style/Modals.css';

const IterationPixelArt = ({images}) => {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <AnimateSharedLayout>
            <div id='iterationpixelart'>
                {images.map((item) =>(
                <motion.div layoutId={item.id} key={item.id} onClick={() => setSelectedId(item.id)} className="img-sizing">
                    <motion.img src={item.src} alt={item.alt} />
                </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId &&
                <motion.div className="modal-overlay">
                    <motion.div className="modal-body" layoutId={selectedId}>
                        <motion.img src={selectedId.src} alt={selectedId.alt} />
                        <motion.button className="modal-close-button" onClick={() => setSelectedId(null)}>✖</motion.button>
                    </motion.div>
                </motion.div>
                }
            </AnimatePresence>
        </AnimateSharedLayout>

    )
    
}

export default IterationPixelArt