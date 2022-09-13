import '../style/AnimCommission.css';
import Typed from 'react-typed';

function OpenOrClosed(){
    
    return(
        <section id="anim-commissions">
            <Typed
                strings={[
                    "Commissions are OPEN",
                ]}
                typeSpeed={150}
            />
        </section>
    )
}

export default OpenOrClosed