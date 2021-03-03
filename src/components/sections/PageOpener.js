import { Link } from 'react-router-dom'

import scroll from '../../utilities/scroll'

import '../../style/navigation.css'

function PageOpener(props) {
    const title = <h2>
        {props.title}
    </h2>

    const description = <div className="opener-text">
        {props.description}
    </div>

    const skills = <div className="floater-icon-nav">
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

    const resume = <div className="floater-icon-nav">
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

    const portfolio = <div className="floater-icon-nav">
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
    
    const posts = <div className="floater-icon-nav">
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

    const about = <div className="floater-icon-nav">
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

    const contact = <div className="floater-icon-nav">
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
    
    return (
        <div>
            <div 
                className="opener-container"
                id="navigation-full"
            >
                <div className="opener-first">
                    {portfolio}
                    {resume}
                    {skills}
                </div>

                <div className="opener-center">
                    {title}
                    {description}
                </div>

                <div className="opener-last">
                    {posts}
                    {about}
                    {contact}
                </div>
            </div>
            
            <div 
                className="opener-container"
                id="navigation-partial"
            >
                <div className="opener-top">
                    {portfolio}
                    {resume}
                    {skills}
                    {posts}
                    {about}
                    {contact}
                </div>

                <div className="opener-bottom">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default PageOpener