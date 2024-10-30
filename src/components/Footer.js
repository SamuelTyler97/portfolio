import "./Footer.css";
import linkedin from "../assets/icons8-linkedin.svg";
import github from '../assets/icons8-github.svg';

const Footer = () => {
    return (
        <div id="my footer">
            <footer>
            <a href="https://www.linkedin.com/in/samuelsoronen/" className="footer-link linkedin-footer footer-logo"><img src={linkedin} className="linkedin" alt="the official linkedin logo"></img></a>
            <a href="https://github.com/SamuelTyler97/my-portfolio" className="footer-link github-footer footer-logo"><img src={github} className="linkedin" alt="the official github logo"></img></a>
            </footer>
        </div>
    )
}

export default Footer;