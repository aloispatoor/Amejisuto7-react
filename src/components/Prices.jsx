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
            <h3>Furry Art Commissions</h3>
                <div className='flexbox'>
                    <div className='headshots'>
                        <h4>Small size / Headshots</h4>
                        <small>Can be ideal for profile picture in social medias, for example</small>
                        <p>Price : 15€</p>
                        <p>+ 8€ per extra character</p>
                        <div key={articFox.id} className="img-sizing">
                            <img src={articFox.src} alt={articFox.alt} />
                        </div>
                    </div>
                    <div className='fullbody'>
                        <h4>Fullbody</h4>
                        <p>Price : 35€</p>
                        <p>+ 15€ per extra character</p>
                        <p>+ 20€ complex background</p>
                        <div key={kitsune.id} className="img-sizing">
                            <img src={kitsune.src} alt={kitsune.alt} />
                        </div>
                    </div>
                </div>
            </article>

            <article className='pixel-art'>
                <h3>Pixel Art Commissions</h3>
                <div className='flexbox'>

                </div>
            </article>
        </section>
    )
}

export default Prices