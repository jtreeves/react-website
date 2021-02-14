import { Link } from 'react-router-dom'

import scroll from '../../utilities/scroll'

function Introduction() {
    return (
        <div className="contains-columns">
            <h2>Software Engineer</h2>
            
            <div className="left-column">
                <Link
                    to="/about"
                    onClick={scroll}
                    className="links"
                >
                    <div className="project-highlight square">
                        <div className="project-image">
                            <img 
                                src="/images/headshot.jpg" 
                                alt="Jackson Reeves" 
                                className="square-content card"
                            />
                        </div>

                        <div className="square-content card project-overlay">
                            <div className="project-title">
                                About Me
                            </div>
                        </div>
                    </div>            
                </Link>
            </div>

            <div className="right-column">
                <div className="square">
                    <div className="square-content card">
                        <div className="card-header">
                            About Me
                        </div>

                        <div className="card-body">
                            <p>
                                Inquisitive full-stack developer with more than a decade of experience in education and journalism. Hoping to combine long-time loves of editing and data analysis to produce clean, performative code.
                            </p>

                            <Link 
                                to="/about"
                                onClick={scroll}
                            >
                                <button 
                                    className="btn btn-primary skill"
                                >
                                    Learn more
                                </button>
                            </Link>

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction