import '../style/Header.css'

function Title(){
    let title = "Amejisuto7";
    return (
            <div className='title'>
                <h1>{title}</h1>
            </div>
    )
}

function NavBar(){
    return(
        <nav>
            <ul>
                <li><a href="#">/Pixel Art</a></li>
                <li><a href="#">/Digital Art</a></li>
                <li><a href="#">/Commissions</a></li>
            </ul>
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