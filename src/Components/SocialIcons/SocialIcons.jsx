import { FaLinkedin, FaTwitter, FaGithub, FaThLarge } from "react-icons/fa"
import "./SocialIcons.css"

function Social(){
    return(
        <section className="icons">
            
                <ul className="icon">
                    <li className="icon-item"><a href="https://github.com/XavierJ96" target="_blank" className="icon-link"><FaGithub size="40px" /></a></li>
                    <li className="icon-item"><a href="https://www.linkedin.com/in/xavier-julies/" className="icon-link" target="_blank"><FaLinkedin size="40px" /></a></li>
                    <li className="icon-item"><a href="https://twitter.com/_Marcelinno_" className="icon-link" target="_blank"><FaTwitter size="40px" /></a></li>
                </ul>

        </section>
    )
}

export default Social