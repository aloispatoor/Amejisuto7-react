import { furryArtList } from '../data/furryArtList'
import ModalFurryArt from '../components/ModalFurryArt'

function FurryArt(){
    return(
        <div className="FurryArt">
            <h2>/My Furry Arts</h2>
            <div className='modals'>
                <ModalFurryArt images={furryArtList}/>
            </div>
        </div>
    )
}

export default FurryArt