import "./Footer.css"
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="links">
                <div className="socials">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://github.com/kattyd" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                </div>
                <div className="newsletter">
                    <h4>join and let us disturb you weekly</h4>
                    <input type="email" placeholder="your email"/>
                    <button>subscribe</button>
                </div>
            </div>
                <div className="copyright">
                    made with by kattyd<br />
                     © {new Date().getFullYear()} LitDAO. All rights reserved.
                </div>
        </footer>
    );
}

export default Footer;