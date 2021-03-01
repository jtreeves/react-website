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

            <div className="introduction-columns">
                <div className="introduction-columns-first">
                    <div className="floater-icon-nav">
                        <Link 
                            to="/skills"
                            onClick={scroll}
                            className="floater-links"
                        >
                            <div className="floater-icon">
                                <i class="fas fa-laptop-code fa-5x" />
                            </div>

                            <div className="floater-text">
                                Skills
                            </div>
                        </Link>
                    </div>

                    <div className="floater-icon-nav">
                        <Link 
                            to="/resume"
                            onClick={scroll}
                            className="floater-links"
                        >
                            <div className="floater-icon">
                                <i class="fas fa-file-alt fa-5x" />
                            </div>

                            <div className="floater-text">
                                Resume
                            </div>
                        </Link>
                    </div>

                    <div className="floater-icon-nav">
                        <Link 
                            to="/portfolio"
                            onClick={scroll}
                            className="floater-links"
                        >
                            <div className="floater-icon">
                                <i class="fas fa-briefcase fa-5x" />
                            </div>

                            <div className="floater-text">
                                Portfolio
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="introduction-columns-center">
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

                <div className="introduction-columns-last">
                    <div className="floater-icon-nav">
                        <Link 
                            to="/posts"
                            onClick={scroll}
                            className="floater-links"
                        >
                            <div className="floater-icon">
                                <i class="fas fa-bullhorn fa-5x" />
                            </div>

                            <div className="floater-text">
                                Posts
                            </div>
                        </Link>
                    </div>

                    <div className="floater-icon-nav">
                        <Link 
                            to="/about"
                            onClick={scroll}
                            className="floater-links"
                        >
                            <div className="floater-icon">
                                <i class="fas fa-comment fa-5x" />
                            </div>

                            <div className="floater-text">
                                About
                            </div>
                        </Link>
                    </div>

                    <div className="floater-icon-nav">
                        <Link 
                            to="/contact"
                            onClick={scroll}
                            className="floater-links"
                        >
                            <div className="floater-icon">
                                <i class="fas fa-paper-plane fa-5x" />
                            </div>

                            <div className="floater-text">
                                Contact
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction