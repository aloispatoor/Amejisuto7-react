import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/Slick.css';
import Slider from "react-slick";

const FurryArtSlider = ({images}) => {
  
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
        <section id="furryArtSlider" className="pink-container">
            <div className="flexbox">
                <article>
                    <h2>/furry art</h2>
                    <p>
                        Here is my best <strong>furry art</strong> features made on CLIP STUDIO PAINT.
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
                    <a href="/furryart" className="pink-button">More</a>
            </div>
        </section>
    )

}

export default FurryArtSlider;