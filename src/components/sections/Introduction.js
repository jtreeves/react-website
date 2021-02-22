import { Link } from 'react-router-dom'

import scroll from '../../utilities/scroll'

function Introduction() {
    return (
        <div className="introduction">
            <img 
                src="/images/painting.jpg" 
                alt="painting" 
                className="painting"
            />
            <div className="three-columns">
                <div className="first-column">
                    <Link 
                        to="/about"
                        onClick={scroll}
                        className="floater-links"
                    >
                        <div className="floater-icon-nav">
                            <div className="floater-icon">
                                <i class="fas fa-laptop-code fa-5x" />
                            </div>
                            <div className="floater-text">
                                Skills
                            </div>
                        </div>
                    </Link>
                    <Link 
                        to="/about"
                        onClick={scroll}
                        className="floater-links"
                    >
                        <div className="floater-icon-nav">
                            <div className="floater-icon">
                                <i class="fas fa-file-alt fa-5x" />
                            </div>
                            <div className="floater-text">
                                Resume
                            </div>
                        </div>
                    </Link>
                    <Link 
                        to="/about"
                        onClick={scroll}
                        className="floater-links"
                    >
                        <div className="floater-icon-nav">
                            <div className="floater-icon">
                                <i class="fas fa-briefcase fa-5x" />
                            </div>
                            <div className="floater-text">
                                Portfolio
                            </div>
                        </div>
                    </Link>
                    
                    {/* <div className="circle-nav" id="first-left">
                        <div className="icon-nav">
                            <i class="fas fa-laptop-code fa-5x" />
                        </div>
                        <div className="text-nav">
                            <Link 
                                to="/about"
                                onClick={scroll}
                                className="nav-links"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="circle-nav" id="second-left">
                        <div className="icon-nav">
                            <i class="fas fa-laptop-code fa-5x" />
                        </div>
                        <div className="text-nav">
                            <Link 
                                to="/about"
                                onClick={scroll}
                                className="nav-links"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="circle-nav" id="third-left">
                        <div className="icon-nav">
                            <i class="fas fa-laptop-code fa-5x" />
                        </div>
                        <div className="text-nav">
                            <Link 
                                to="/about"
                                onClick={scroll}
                                className="nav-links"
                            >
                                Blog
                            </Link>
                        </div>
                    </div> */}
                    
                    {/* <i class="fas fa-code fa-5x" />
                    <i class="fas fa-code-branch fa-5x" />
                    <i class="fas fa-laptop-code fa-5x" />
                    <i class="fas fa-file-code fa-5x" />
                    <i class="far fa-edit fa-5x" />
                    <i class="far fa-paper-plane fa-5x" />
                    <i class="far fa-keyboard fa-5x" /> */}
                </div>
                <div className="center-column">
                    <img 
                        src="/images/headshot.jpg" 
                        alt="Jackson Reeves" 
                        className="headshot"
                    />
                    <h2>Software Engineer</h2>
                    <p>
                        Inquisitive full-stack developer with more than a decade of experience in education and journalism. Hoping to combine long-time loves of editing and data analysis to produce clean, performative code.
                    </p>
                    
                </div>
                <div className="last-column">
                <Link 
                        to="/about"
                        onClick={scroll}
                        className="floater-links"
                    >
                        <div className="floater-icon-nav">
                            <div className="floater-icon">
                                <i class="fas fa-bullhorn fa-5x" />
                            </div>
                            <div className="floater-text">
                                Posts
                            </div>
                        </div>
                    </Link>
                    <Link 
                        to="/about"
                        onClick={scroll}
                        className="floater-links"
                    >
                        <div className="floater-icon-nav">
                            <div className="floater-icon">
                                <i class="fas fa-comment fa-5x" />
                            </div>
                            <div className="floater-text">
                                About
                            </div>
                        </div>
                    </Link>
                    <Link 
                        to="/about"
                        onClick={scroll}
                        className="floater-links"
                    >
                        <div className="floater-icon-nav">
                            <div className="floater-icon">
                                <i class="fas fa-paper-plane fa-5x" />
                            </div>
                            <div className="floater-text">
                                Contact
                            </div>
                        </div>
                    </Link>
                {/* <div className="floater-icon-nav">
                        <div className="floater-icon">
                        <i class="fas fa-bullhorn fa-5x" />
                        </div>
                        <div className="floater-text">
                            <Link 
                                to="/about"
                                onClick={scroll}
                                className="floater-links"
                            >
                                Posts
                            </Link>
                        </div>
                    </div>
                    <div className="floater-icon-nav">
                        <div className="floater-icon">
                        <i class="fas fa-comment fa-5x" />
                        </div>
                        <div className="floater-text">
                            <Link 
                                to="/about"
                                onClick={scroll}
                                className="floater-links"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="floater-icon-nav">
                        <div className="floater-icon">
                        <i class="fas fa-paper-plane fa-5x" />
                        </div>
                        <div className="floater-text">
                            <Link 
                                to="/about"
                                onClick={scroll}
                                className="floater-links"
                            >
                                Contact
                            </Link>
                        </div>
                    </div> */}
                    
                    {/* <i class="fas fa-briefcase fa-5x" />
                    <i class="fas fa-calculator fa-5x" />
                    <i class="fas fa-bullhorn fa-5x" />
                    <i class="fas fa-brain fa-5x" />
                    <i class="fas fa-chart-bar fa-5x" />
                    <i class="far fa-comment fa-5x" />
                    <i class="far fa-star fa-5x" />
                    <i class="far fa-thumbs-up fa-5x" />
                    <i class="fas fa-users fa-5x" />
                    <i class="far fa-heart fa-5x" />                
                    <i class="fas fa-certificate fa-5x" />
                    <i class="fas fa-copy fa-5x" /> */}
                </div>
            </div>
            
            

                            

                            <Link 
                                to="/contact"
                                onClick={scroll}
                            >
                                <button 
                                    className="btn btn-primary skill"
                                >
                                    Contact me
                                </button>
                            </Link>

                            <Link 
                                to="/socialize"
                                onClick={scroll}
                            >
                                <button 
                                    className="btn btn-primary skill"
                                >
                                    Follow me
                                </button>
                            </Link>

                            <Link 
                                to="/blog"
                                onClick={scroll}
                            >
                                <button 
                                    className="btn btn-primary skill"
                                >
                                    Read my blog
                                </button>
                            </Link>

                            <Link 
                                to="/portfolio"
                                onClick={scroll}
                            >
                                <button 
                                    className="btn btn-primary skill"
                                >
                                    View my projects
                                </button>
                            </Link>

                            <Link 
                                to="/skills"
                                onClick={scroll}
                            >
                                <button 
                                    className="btn btn-primary skill"
                                >
                                    See my skills
                                </button>
                            </Link>
                            
                            <Link 
                                to="/resume"
                                onClick={scroll}
                            >
                                <button 
                                    className="btn btn-primary skill"
                                >
                                    Check out my resume
                                </button>
                            </Link>
                        </div>
                    
    
    )
}

export default Introduction