import About from '../components/About'
import Divider from '../components/Divider'
import { pixelArtList } from '../data/pixelArtList'
import PixelArtSlider from '../components/CarouselPixelArt'
import { furryArtList } from '../data/furryArtList'
import FurryArtSlider from '../components/CarouselFurryArt'


function Home() {
  return (
    <div className='Home'>
        <About />
        <Divider />
        <PixelArtSlider images={pixelArtList} />
        <Divider />
        <FurryArtSlider images={furryArtList} />
    </div>

    
  )
}

export default Home