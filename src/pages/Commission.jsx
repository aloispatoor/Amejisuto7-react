import '../style/BodyPages.css';
import TermsCondition from "../components/TermsCondition"
import OpenOrClosed from "../components/OpenOrClosed"
import { commissionsList } from '../data/commissionsList'
import Prices from "../components/Prices"

function Commission(){
    return(
        <div className="Commission">
            <OpenOrClosed />
            <TermsCondition />
            <Prices images={commissionsList} />
        </div>
    )
}

export default Commission