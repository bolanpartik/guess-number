import Logo from '../assets/logo.png'

export default function Header(){
    return(
        <header>
            <div>
                <img src={Logo} alt="logo" />
                <p>Guess Number</p>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </div>
        </header>
    )
}