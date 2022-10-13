import '../style/Modals.css';
import useModal from './useModal';
import Modal from './Modal';

const IterationFurryArt = ({images}) => {
    const { isShowing, toggle } = useModal();
    return (
        <div id='iterationfurryart'>
            {images.map((item) =>(
            <div key={item.id} className="img-sizing">
                <img src={item.src} alt={item.alt} onClick={toggle} />
                <Modal isShowing={isShowing} hide={toggle} />
            </div>
            ))}
        </div>
    )
    
}

export default IterationFurryArt