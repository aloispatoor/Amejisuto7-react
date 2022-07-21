import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/Slick.css';
import Slider from "react-slick";

const PixelArtSlider = ({images}) => {
  
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
     
    };
    return (
        <section id="pixelArtSlider">
            <div className="flexbox">
                <article>
                    <p>
                        Here is my best pixel art features.
                    </p>
                </article>
                <div className="imgslider">
                    <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img src={item.src}  alt={item.alt} />
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
            <div className="button-container">
                    <a href="/" className="button">More</a>
            </div>
        </section>
    )

}

export default PixelArtSlider;