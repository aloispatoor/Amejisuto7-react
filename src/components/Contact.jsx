import '../style/Contact.css';
import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/e18b77d0-29fa-11ed-a7a0-3f26160640a2";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
        setSubmitted(true);
        }, 100);
    };

    if(submitted){
        return (
            <>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </>
        );
    }

    return(
        <section id="contact">
            <h2>/Contact me</h2>
            <div className='flexbox'>
                <form id="contactform" action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank" className='pink-container'>
                    <input type="email" id="email" name="email" 
                    placeholder='Your email address' required/>

                    <input id="subject" name="subject" 
                    placeholder='The subject' required />

                    <textarea id="message" name="message" 
                    placeholder='Type your message here' required></textarea>

                    <input type="submit" className='pink-button' value="Send"/>

                </form>
                <article className='socialMedia blue-container'>
                    <a href="https://mastodon.art/@Artmejisuto7"><i class="fa-brands fa-mastodon"></i></a>
                    <a href="https://www.artstation.com/amejisuto7"><i class="fa-brands fa-artstation"></i></a>
                    <a href="https://twitter.com/AloisDuPerigord"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://t.me/aloisduperigord"><i class="fa-brands fa-telegram"></i></a>
                    <a href="https://utip.io/alexandrovitch"><i class="fa-brands fa-gratipay"></i></a>
                </article>
            </div>
        </section>
    );
};

export default Contact