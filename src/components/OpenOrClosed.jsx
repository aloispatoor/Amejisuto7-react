import '../style/AnimCommission.css';
import React from "react";
import  { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
    const words = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    console.log(words);
    return (
        <motion.div variants={container} initial="hidden" animate="visible">{words.map((word, index) => (
            <motion.span key={index} variants={child} style={{ marginRight: "5px" }}>{word}</motion.span>
            ))}
        </motion.div>
    );
};

function OpenOrClosed(){
    
    return(
        <section id="anim-commissions">
            <AnimatedText text="Commissions are CLOSED"/>
        </section>
    )
}

export default OpenOrClosed