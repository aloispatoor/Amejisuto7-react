import '../style/Contact.css';
import React, { useState } from "react";

function Contact(){
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { subject, email, message } = e.target.elements;
        let details = {
        email: email.value,
        subject: subject.value,
        message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    };

    return(
        <section id="contact">
            <h2>/Contact me</h2>
            <div className='flexbox'>
            <form id="contactform" onSubmit={handleSubmit} className='pink-container'>
                <input type="email" id="email" placeholder='Your email address' required/>
                <input id="subject" placeholder='The subject' required />
                <textarea id="message" placeholder='Type your message here' required></textarea>
                <button type="submit" className='pink-button'>{status}</button>
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