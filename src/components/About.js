import '../style/About.css'

function About(){
    let title = "/About me"
    return(
        <section id="about">
            <article>
                <h2>{title}</h2>
                <p>
                    I'm a <strong>french pixel and furry artist</strong>.
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