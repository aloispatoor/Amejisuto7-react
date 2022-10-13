import '../style/SectionCommission.css';

function SectionCommission(){

    return(
        <section id="commissionHome">
            <h2>/commissions</h2>
            <p>You can order me <strong>pixel art</strong> and / or <strong>digital painting furry art</strong>. Depending of what you ask and the options you wish, prices go from 15€ to 65€.</p>
            <p>You can find all the <strong>commission possibilities</strong> by clicking the following button</p>
            <div className="button-container">
                <a href="/commission" className="blue-button">More informations</a>
            </div>
        </section>
    )
}

export default SectionCommission