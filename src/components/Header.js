import "./Header.css";
import photo from "../assets/stock-man-b&w.jpg";

const Header = () => {
    return (
        <div className="header-container container" id="home">
            <h1 className="welcome-header-text">Samuel Soronen</h1>
            <h3 class="tagline">FULL-STACK DEVELOPER</h3>
            
            <div class="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
        </div>

            <img src={photo} alt="man smiling against a black background" 
            className= "my-photo w-25 img-fluid" width="600" height="400"></img> 

            <p className="intro">I'm a web developer who turns caffeine into code. Whether it's crafting sleek front-end designs or 
            architecting robust back-end solutions, I make the web a better place, one pixel at a time.</p>
        </div>
    );
}

export default Header;