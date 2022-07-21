import Header from './Header'
import About from './About'
import Divider from './Divider'
import { pixelArtList } from '../data/pixelArtList'
import PixelArtSlider from './CarouselPixelArt'


function App() {
  return (
    <div className='App'>
        <Header />
        <About />
        <Divider />
        <PixelArtSlider images={pixelArtList} />
        <Divider />
    </div>

    
  )
}

export default App