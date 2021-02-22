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
                </div>
            </div>
        </div>
    )
}

export default Introduction