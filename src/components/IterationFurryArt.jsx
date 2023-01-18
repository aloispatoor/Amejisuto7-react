import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import '../style/Modals.css';

const IterationFurryArt = ({images}) => {
    const [selectedId, setSelectedId] = useState(null);
    
    return (
        <AnimateSharedLayout>
            <div id='iterationfurryart'>
                {images.map((item) =>(
                <motion.div layoutId={item.id} key={item.id} onClick={() => setSelectedId(item.id)} className="img-sizing">
                    <motion.img src={item.src} alt={item.alt} />
                </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId &&
                <motion.div className="modal-overlay">
                    {images.map((item) =>(
                    <motion.div className="modal-body" key={selectedId} layoutId={selectedId}>
                        <motion.img src={item.src} alt={item.alt}/>
                        <motion.button className="modal-close-button" onClick={() => setSelectedId(null)}>✖</motion.button>
                    </motion.div>
                    ))}
                </motion.div>
                }
            </AnimatePresence>
        </AnimateSharedLayout>
    ) 
}


export default IterationFurryArt