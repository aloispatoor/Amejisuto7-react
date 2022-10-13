import '../style/Modals.css';

const ModalPixelArt = ({images}) => {

    return (
        <div id='modalpixelart'>
            {images.map((item) =>(
            <div key={item.id} className="img-sizing">
                <img src={item.src} alt={item.alt} />
            </div>
            ))}
        </div>
    )
    
}

export default ModalPixelArt