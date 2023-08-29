import { useState } from "react"
import { Spin as Hamburger } from "hamburger-react"
import "./Navbar.css"
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar(){

    const [isOpen, setOpen] = useState(false)

    const closeMenu = () => {
        setOpen(false);
    };

    const openResumeWindow = () => {
        window.open('https://drive.google.com/file/d/19Cxz8xONo2nvQDzsolM3PpguWl5N0opH/view?usp=sharing', '_blank');
      };

    return (
        <nav className="nav-section" id="navbar">
            <div className="nav container">
            <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                className="nav-img">
                <img src="images/xj-white.svg" alt="Image of a signature logo" className="logo" />
            </Link>

                <a className="nav-links resume" href="https://drive.google.com/file/d/19Cxz8xONo2nvQDzsolM3PpguWl5N0opH/view?usp=sharing" target=
                "_blank" download="Xavier's Resume.pdf">Resume</a>
                <Hamburger duration={0.8} toggled={isOpen} toggle={setOpen} size="30"/>

                <div className="nav_container">
                <ul className="nav_list">
                    <Link to="projects"
                    offset={-70}>
                        <li className="nav_item"><a className="nav-links">Projects</a></li>
                    </Link>
                    <Link to="about"
                    offset={-70}>
                        <li className="nav_item"><a className="nav-links">About</a></li>
                    </Link>
                    <Link to="contact"
                    offset={-70}>
                        <li className="nav_item"><a className="nav-links">Contact</a></li>
                    </Link>
                        <li className="nav_item"><a onClick={openResumeWindow} className="nav-links nav_resume">Resume</a></li>
                </ul>
            </div>
            </div>
            { isOpen ? 
            <div className="list-container fadeIn">
                <ul className="nav-list">
                    <Link
                    to="projects"
                    offset={-260}
                    onClick={closeMenu}
                    >
                        <li className="nav-item"><a className="nav-links">Projects</a></li>
                    </Link>
                    <Link
                    to="about"
                    offset={-260}
                    onClick={closeMenu}>
                        <li className="nav-item"><a className="nav-links">About</a></li>
                    </Link>
                    <Link
                    to="contact"
                    offset={-230}
                    onClick={closeMenu}>
                        <li className="nav-item"><a className="nav-links">Contact</a></li>
                    </Link>
                    <Link>
                        <li className="nav-item"></li>
                    </Link>
                </ul>
            </div> : false}
        </nav>
    )
}

export default Navbar