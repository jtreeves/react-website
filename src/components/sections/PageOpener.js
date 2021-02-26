import { Link } from 'react-router-dom'

import scroll from '../../utilities/scroll'

function PageOpener(props) {
    return (
        <div className="opener-container">
            <div className="opener-first">
                <div className="floater-icon-nav">
                    <Link 
                        to="/skills"
                        onClick={scroll}
                        className="floater-links"
                    >
                        <div className="floater-icon">
                            <i class="fas fa-laptop-code fa-3x" />
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
                            <i class="fas fa-file-alt fa-3x" />
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
                            <i class="fas fa-briefcase fa-3x" />
                        </div>

                        <div className="floater-text">
                            Portfolio
                        </div>
                    </Link>
                </div>
            </div>

            <div className="opener-center">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>

            <div className="opener-last">
                <div className="floater-icon-nav">
                    <Link 
                        to="/posts"
                        onClick={scroll}
                        className="floater-links"
                    >
                        <div className="floater-icon">
                            <i class="fas fa-bullhorn fa-3x" />
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
                            <i class="fas fa-comment fa-3x" />
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
                            <i class="fas fa-paper-plane fa-3x" />
                        </div>

                        <div className="floater-text">
                            Contact
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageOpener