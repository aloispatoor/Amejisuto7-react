import { furryArtList } from '../data/furryArtList'
import IterationFurryArt from '../components/IterationFurryArt'

function FurryArt(){
    return(
        <div className="FurryArt">
            <h2>/My Furry Arts</h2>
            <div className='modals'>
                <IterationFurryArt images={furryArtList}/>
            </div>
        </div>
    )
}

export default FurryArt