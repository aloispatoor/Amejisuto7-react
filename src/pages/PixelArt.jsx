import { pixelArtList } from '../data/pixelArtList'
import IterationPixelArt from '../components/IterationPixelArt'

function PixelArt(){
    return(
        <section className="PixelArt">
            <h2>/My Pixel Arts</h2>
            <div className='modals'>
                <IterationPixelArt images={pixelArtList}/>
            </div>
        </section>
    )
}

export default PixelArt