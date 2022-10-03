import { commissionsList } from '../data/commissionsList';
import '../style/Prices.css';


const Prices = () => {
    const ArticFox = commissionsList[0];
    const kitsune = commissionsList[1];
    const paul = commissionsList[2];
    const synthDeer = commissionsList[3];
    const bunny = commissionsList[4];
    const pixelLove = commissionsList[5];
    const badges = commissionsList[6];

    return(
        <section id="prices">
            <article className='furry-art'>
            <h3>Furry Art Commissions</h3>
                <div className='flexbox'>
                    <div className='headshots'>
                        <div>
                            <h4>Small size / Headshots</h4>
                            <small>Can be ideal for profile picture in social medias, for example</small>
                            <p>Price : 15€</p>
                            <p>+ 8€ per extra character</p>
                        </div>
                        <div key={ArticFox.id}>
                            <img src={ArticFox.src} alt={ArticFox.alt} />
                        </div>
                    </div>
                    <div className='fullbody'>
                        <h4>Fullbody</h4>
                        <p>Price : 35€</p>
                        <p>+ 15€ per extra character</p>
                        <p>+ 20€ complex background</p>
                    </div>
                    <div key={kitsune.id}>
                        <img src={kitsune.src} alt={kitsune.alt} />
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