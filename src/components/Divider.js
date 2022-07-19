import '../style/Divider.css'
import divider from '../assets/img/divider.svg'

function Divider(){
    return(
        <div className='divider-container'>
            <img src={divider} alt="divider" className="divider" />
        </div>
    )
}

export default Divider