import TermsCondition from "../components/TermsCondition"
import OpenOrClosed from "../components/OpenOrClosed"

function Commission(){
    return(
        <div className="Commission">
            <h2>/commissions</h2>
            <OpenOrClosed />
            <TermsCondition />
        </div>
    )
}

export default Commission