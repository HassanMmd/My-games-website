import "../components/Footer.css"
import logo from "../Assets/images/logo.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="Compant-name-logo">
                <img className="logo-footer" src={logo} alt="logo" />
                <div className= "company-name">HMM GAMES</div>
            </div>
            <div id="contact" className="contact">
                <h5>Contact</h5>
                <div>Email</div>
                <div>dancing0ball@gmail.com</div>
            </div>
            <div className="contact">
            <h5>social media</h5>
            <a href="https://www.youtube.com/channel/UCIr6PtkImtsR6csJHeIZXlA">Youtube</a>
            <a href="https://twitter.com/DancingBall4">Twitter</a>
            </div>
        </footer>
    );
}

export default Footer;