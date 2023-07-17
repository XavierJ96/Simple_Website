import "./Hero.css"
import { BsMouse } from "react-icons/bs"
import { Link, animateScroll as scroll } from "react-scroll";

function Hero(){
    return(
        <section className="hero-section" id="hero">
            <div className="hero container">
                    <div className="text-wrapper">
                        <div className="text-container">
                            <h1 className="name-header">Hi, I'm Xavier Julies</h1>
                            <h4 className="sub-header">Frontend Developer</h4>
                            <p className="hero-text">I design and code beautifully simple things, and I love what I do.</p>
                        </div>
                            <div className="img-container">
                                <img src="images/coder.png" alt="Image of a coder" className="coder-img"/>
                            </div>
                        </div>
                        <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className="scroll-text">
                        <div className="scroll-icon">
                            Scroll down
                            <BsMouse
                            size={30}
                            className="mouse-icon"
                            />
                        </div>
                        </Link>
                </div>
        </section>
        
    )
}

export default Hero