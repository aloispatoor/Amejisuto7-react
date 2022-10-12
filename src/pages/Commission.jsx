import '../style/BodyPages.css';
import TermsCondition from "../components/TermsCondition"
import OpenOrClosed from "../components/OpenOrClosed"
import { commissionsList } from '../data/commissionsList'
import Prices from "../components/Prices"
import Divider from "../components/Divider"

function Commission(){
    return(
        <div className="Commission">
            <OpenOrClosed />
            <TermsCondition />
            <Divider />
            <Prices images={commissionsList} />
        </div>
    )
}

export default Commission