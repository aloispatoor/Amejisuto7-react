import { pixelArtList } from '../data/pixelArtList'
import ModalPixelArt from '../components/ModalPixelArt'

function PixelArt(){
    return(
        <section className="PixelArt">
            <h2>/My Pixel Arts</h2>
            <div className='modals'>
                <ModalPixelArt images={pixelArtList}/>
            </div>
        </section>
    )
}

export default PixelArt