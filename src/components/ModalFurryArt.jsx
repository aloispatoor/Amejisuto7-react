import '../style/Modals.css';

const ModalFurryArt = ({images}) => {

    return (
        <div id='modalfurryart'>
            {images.map((item) =>(
            <div key={item.id} className="img-sizing">
                <img src={item.src} alt={item.alt} />
            </div>
            ))}
        </div>
    )
    
}

export default ModalFurryArt