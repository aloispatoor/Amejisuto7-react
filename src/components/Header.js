import '../style/Header.css'
import { useState } from 'react'

function Title(){
    let title = "Amejisuto7";
    return (
            <div className='title'>
                <h1>{title}</h1>
            </div>
    )
}

function NavBar(){
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return(
        <nav className={`navbar ${showLinks ? "showNav" : "hideNav"} `}>
            <ul className='navbar__links'>
                <li className='navbar__item'>
                    <a href="/" className='navbar__link'>/Pixel Art</a>
                </li>
                <li className='navbar__item'>
                    <a href="/" className='navbar__link'>/Digital Art</a>
                </li>
                <li className='navbar__item'>
                    <a href="/" className='navbar__link'>/Commissions</a>
                </li>
            </ul>
            <button className='navbar__burger' onClick={handleShowLinks}>
                <span className='bar'></span>
            </button>
        </nav>
    )
}



function Header(){
    return(
        <header>
            <Title />
            <NavBar />

        </header>
    )
}

export default Header