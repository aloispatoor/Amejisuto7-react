import '../style/Contact.css';
import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/e18b77d0-29fa-11ed-a7a0-3f26160640a2";

function SocialMedia() {
    return (
        <article className='socialMedia blue-italic-container'>
            <a href="https://mastodon.art/@Artmejisuto7" target="_blank" rel="noreferrer"><i class="fa-brands fa-mastodon"></i></a>
            <a href="https://www.artstation.com/amejisuto7" target="_blank" rel="noreferrer"><i class="fa-brands fa-artstation"></i></a>
            <a href="https://t.me/aloisduperigord" target="_blank" rel="noreferrer"><i class="fa-brands fa-telegram"></i></a>
            <a href="https://utip.io/alexandrovitch" target="_blank" rel="noreferrer"><i class="fa-brands fa-gratipay"></i></a>
        </article>

    )
};

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
                <section id="contact">
                    <h2>Thank you!</h2>
                    <div className='flexbox'>
                        <div>We'll be in touch soon.</div>
                        < SocialMedia />
                    </div>
                </section>
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
                    placeholder='Your message here' required></textarea>

                    <input type="submit" className='pink-button' value="Send"/>

                </form>
                < SocialMedia />
            </div>
        </section>
    );
};

export default Contact