import '../style/Contact.css';

function Contact(){

    return(
        <section id="contact">
            <h2>/Contact me</h2>
            <div className='flexbox'>
            <form id="contactform" action="" method="POST" className='pink-container'>
                <input type="email" id="email" name="email" 
                placeholder='Your email address' required/>

                <input id="subject" name="subject" 
                placeholder='The subject' required />

                <textarea id="message" name="message" 
                placeholder='Type your message here' required></textarea>

                <input type="submit" className='pink-button' value="Send"/>
                {/* <div className='alert'>
                    <p>Your message has been sent. I will answer as soon as possible. Thank you!</p>
                </div> */}
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