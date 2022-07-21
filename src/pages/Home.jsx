import About from '../components/About'
import Divider from '../components/Divider'
import { pixelArtList } from '../data/pixelArtList'
import PixelArtSlider from '../components/CarouselPixelArt'


function Home() {
  return (
    <div className='Home'>
        <About />
        <Divider />
        <PixelArtSlider images={pixelArtList} />
        <Divider />
    </div>

    
  )
}

export default Home