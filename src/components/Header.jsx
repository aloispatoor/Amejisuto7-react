import '../style/Header.css'
import { useState } from 'react'

function Title(){
    let title = "Amejisuto7";
    return (
            <div className='title blue-container'>
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
                    <a href="/" className='navbar__link'>/Home</a>
                </li>
                <li className='navbar__item'>
                    <a href="/pixelart" className='navbar__link'>/Pixel Art</a>
                </li>
                <li className='navbar__item'>
                    <a href="/furryart" className='navbar__link'>/Furry Art</a>
                </li>
                <li className='navbar__item'>
                    <a href="/commission" className='navbar__link'>/Commissions</a>
                </li>
            </ul>
            <button className='navbar__burger' onClick={handleShowLinks}>
                <span className="sr-only">Menu</span>
                <span className='bar'></span>
            </button>
        </nav>
    )
}



function Header(){
    return(
        <header id="header">
            <Title />
            <NavBar />

        </header>
    )
}

export default Header