import "./Main.css";
import linkedin from "../assets/icons8-linkedin.svg";
import github from '../assets/icons8-github.svg';



const Main = (props) => {
    
    
    return (
        
        
        <div>
        <div className="json-container container" id="about">
            <ul className="json-list">
            <span className="vs-yellow">{props.leftBrace} {props.rightBrace} AboutMe.json</span>
                <li className="brace pad">{props.leftBrace}</li>
                <li class='list-item-pad'>
                <span className="vs-blue">"name" <span className="vs-white"> : </span></span>
                <span className="vs-orange"> "Samuel Soronen"</span>,
                </li>

                <li class='list-item-pad'>
                <span className="vs-blue">"age" <span className="vs-white"> : </span></span>
                <span className="vs-green">27</span>,
                </li>

                <li class='list-item-pad'>
                <span className="vs-blue">"contactInfo" <span className="vs-white"> : </span></span><span className="purple-brace">{props.leftBrace}</span>
                <span className="vs-green"></span>
                </li>
                <br />

                <li class='double-pad'>
                <span className="vs-blue">"phone" <span className="vs-white"> : </span></span>
                <a href="tel: 9192098734"><span className="vs-green">123-456-7890</span></a>,
                </li>
                <br />

                <li class='double-pad'>
                <span className="vs-blue">"email" <span className="vs-white"> : </span> </span>
                <a href="mailto: stsoronen2197@gmail.com" className="email"><span className="vs-orange">"stsoronen@my.waketech.edu"</span></a>,
                </li>
                <br />

                <li class='double-pad'>
                <img src={linkedin} className="linkedin" alt="the official linkedin logo"></img>
                <a href="https://www.linkedin.com/in/samuelsoronen/" className="link-border linkedin-text"><span className="vs-orange">"Find me on LinkedIn"</span></a>,
                </li>
                <br />

                <li class='double-pad'>
                <img src={github} className="linkedin" alt="the official linkedin logo"></img>
                <a href="https://github.com/SamuelTyler97/portfolio" className="link-border gihub-text"><span className="vs-orange">"Check out my Github"</span></a>
                </li>

                <span className="purple-brace list-item-pad">{props.rightBrace}<span className="vs-white">,</span></span>

                <li class='list-item-pad'>
                <span className="vs-blue">skills<span className="vs-white"> : </span> </span><span className="vs-dark-blue">{props.rightBracket}</span>
                <span className="vs-green"></span>
                </li>

                <li class='double-pad'>
                <span className="vs-white">HTML5, CSS3, JavaScript</span>,
                </li>
                <br />

                <li class='double-pad'>
                <span className="vs-white">MERN Stack: React, MongoDB, Node.js, Express.js</span>,
                </li>
                <br />

                <li class='double-pad'>
                <span className="vs-white">MySQL, PHP, TypeScript</span>,
                </li>
                <br />

                <li class='double-pad'>
                <span className="vs-white">Strong interpersonal skills</span>,
                </li>
                <br />

                <li class='double-pad'>
                <span className="vs-white">Creative and efficient problem solving</span>
                </li>

                <span className="vs-dark-blue list-item-pad">{props.leftBracket}</span>,

                <li class='list-item-pad'>
                <span className="vs-blue">experience<span className="vs-white"> : </span> </span><span className="vs-dark-blue">{props.rightBracket}</span>
                <span className="vs-green"></span>
                </li>

                <li class='double-pad'>
                <span className="vs-white">Re-designed and built sites for multiple small businesses</span>,
                </li>
                <br />

                <li class='double-pad'>
                <span className="vs-white">Experience working with RESTful API's</span>,
                </li>
                <br />

                <li class='double-pad'>
                <span className="vs-white">Developed web apps that query databases to produce dynamic content</span>
                </li>

                <span className="vs-dark-blue list-item-pad">{props.leftBracket}</span>
                <br />
                <span className="purple-brace list-item-pad">{props.rightBrace}<span className="vs-white">,</span></span>

                <li className="brace">{props.rightBrace}</li>
            </ul>
        </div>

        <div className="container my-5" id="portfolio">
            <h3 className="tagline-bottom">View My Work</h3>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <img src={props.OceanIsle} alt="Project 1"/>
                        <div className="card-body">
                            <h5 className="card-title">Website Re-design</h5>
                            <p className="card-text">A fully responsive redesign of a North Carolina county website, incorporating Bootstrap, 
                                and modern CSS techniques. This redesign features a modern look and feel as well as greatly improved UI/UX. This serves as a fictional
                                mockup for design purposes only.</p>
                            <a href="https://wcet.waketech.edu/stsoronen/WEB287/ocean-isle/index.html" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <img src={props.DevNow} alt="Project 2"/>
                        <div className="card-body">
                            <h5 className="card-title">DeveloperNow</h5>
                            <p className="card-text">A fully functional e-commerce site built on the WordPress CMS and utilizing WooCommerce functionality. 
                                Features include product pages, checkout and payment processing, inventory management, fully responsive design, 
                                and SEO optimization. </p>
                            <a href="https://wcet.waketech.edu/stsoronen/WEB260/stsoronen-wordpress/" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <img src={props.ResBuilder} alt="Project 3"/>
                        <div className="card-body">
                            <h5 className="card-title">Resume Builder</h5>
                            <p className="card-text">An easy to use web application that allows users to quickly create their resume through interaction with a web 
                                form. Custom JavaScript code provides functionality for storing user information, form validation, 
                                and dynamic resume generation. </p>
                            <a href="https://wcet.waketech.edu/stsoronen/WEB287/resume_builder/index.html" className="btn btn-primary">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
        
    )
}

export default Main;