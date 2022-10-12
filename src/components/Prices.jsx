import { commissionsList } from '../data/commissionsList';
import '../style/Prices.css';


const Prices = () => {
    const articFox = commissionsList[0];
    const kitsune = commissionsList[1];
    const paul = commissionsList[2];
    const synthDeer = commissionsList[3];
    const bunny = commissionsList[4];
    const pixelLove = commissionsList[5];
    const badges = commissionsList[6];

    return(
        <section id="prices">
            <article className='furry-art blue-container'>
            <h3>/Furry Art Commissions</h3>
                <div className='flexbox'>
                    <div className='headshots'>
                        <h4>/Small size - Headshots</h4>
                        <small>Can be ideal for profile picture in social medias, for example</small>
                        <p>Price : <span>15€</span></p>
                        <p><span>+ 8€</span> per extra character</p>
                        <div key={articFox.id} className="img-sizing">
                            <img src={articFox.src} alt={articFox.alt} />
                        </div>
                    </div>
                    <div className='fullbody'>
                        <h4>/Fullbody</h4>
                        <p>Price : <span>35€</span></p>
                        <p><span>+ 15€</span> per extra character</p>
                        <p><span>+ 20€</span> complex background</p>
                        <div key={kitsune.id} className="img-sizing">
                            <img src={kitsune.src} alt={kitsune.alt} />
                        </div>
                    </div>
                </div>
            </article>

            <article className='pixel-art blue-container'>
                <h3>/Pixel Art Commissions</h3>
                <div className='flexbox'>
                    <div className='pa-imgs'>
                        <div key={paul.id} className="img-sizing">
                            <img src={paul.src} alt={paul.alt} />
                        </div>
                        <div key={synthDeer.id} className="img-sizing">
                            <img src={synthDeer.src} alt={synthDeer.alt} />
                        </div>
                        <div key={bunny.id} className="img-sizing">
                            <img src={bunny.src} alt={bunny.alt} />
                        </div>
                        <div key={pixelLove.id} className="img-sizing">
                            <img src={pixelLove.src} alt={pixelLove.alt} />
                        </div>
                    </div>
                    <div className='pa-text'>
                        <p>Pixel art commissions are in 200x200px or 300x300px</p>
                        <p>Price : <span>30€</span></p>
                    </div>
                </div>
            </article>

            <article className='twitch blue-container'>
                <h3>/Commissions for Twitch</h3>
                <div className='flexbox'>
                    <div key={badges.id} className="t-img">
                        <img src={badges.src} alt={badges.alt} />
                        <small>Subscribers Badges for the Twitch channel <a href="https://www.twitch.tv/raillus">Raillus</a></small>
                    </div>
                    <div className='t-text'>
                        <p><span>35€</span> for one badge</p>
                        <p><span>+ 5€</span> each other badge</p>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default Prices