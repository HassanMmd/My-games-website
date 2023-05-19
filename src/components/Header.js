import logo from "../Assets/images/logo.png"
import "./Header.css"

function Header() {
return (
<header className="header">
    <div className="Compant-name-logo">
    <img className="logo" src={logo} alt="logo"/>
    <div className= "company-name">HMM GAMES</div>
    </div>
    <div>

    </div>
</header>
);
}

export default Header;