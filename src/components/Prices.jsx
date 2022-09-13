import '../style/Prices.css';

function Prices({images}){

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
                        {images.map((item) =>(
                            <div key={item.id === 1} className='img-sizing'>  
                                <img src={item.src} alt={item.alt} />
                            </div>
                        ))}
                    </div>
                    <div className='fullbody'>
                        <h4>Fullbody</h4>
                        <p>Price : 35€</p>
                        <p>+ 15€ per extra character</p>
                        <p>+ 20€ complex background</p>
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