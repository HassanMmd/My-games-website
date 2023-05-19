import "./Navbar.css"
function Navbar() {
    const handleClick = (anchor) => () => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }
      };


    return (
        <div>
        <nav className="nav-list">
        <a href="/" onClick={handleClick("header")} className="list-item">Home</a>
        <a href="#Aboutus" onClick={handleClick("aboutus")} className="list-item">AboutUs</a>
        <a href="#Contact" onClick={handleClick("contact")} className="list-item">Contact</a>
    </nav>
    </div>
    );
}

export default Navbar;