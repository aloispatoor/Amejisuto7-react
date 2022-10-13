import '../style/About.css';
import image from '../assets/img/image.webp';

function About(){
    let title = "/About me"
    return(
        <section id="about">
            <div className='img-sizing'>
                <img src={image} alt="Illustration image" />
            </div>
            <article className='pink-italic-container'>
                <h2>{title}</h2>
                <p>
                    My name is Aloïs, I'm a <strong>french pixel and furry artist</strong>.
                    I've always designed characters, since my childhood. And it has never left me!
                </p>
                <p>
                    I have a taste for <strong>cyberpunk / steampunk / retrofuturistic aesthetics</strong>.
                    I work mainly on Aseprite and CLIP STUDIO PAINT, sometimes on Krita.
                    You can find here some of my arts I'm proud of. Hope you enjoy!
                </p>
            </article>
        </section>
    )
}

export default About