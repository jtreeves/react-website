import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
    return (
        <header>
            <div className="contains-columns">
                <div className="left-column">
                    <Link 
                        to="/" 
                        style={{ 
                            textDecoration: "none", 
                            color: "black",
                            lineHeight: "100px"
                        }}
                    >
                        <h1>Jackson Reeves</h1> 
                    </Link>
                </div>

                <div className="right-column">
                    <ul>
                        <li>
                            <a 
                                href="https://github.com/jtreeves" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <i className="fab fa-github-square fa-lg" />
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/jacksonreeves/" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <i className="fab fa-linkedin fa-lg" />
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="https://twitter.com/JTReeves" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <i className="fab fa-twitter-square fa-lg" />
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="https://programming10101.tumblr.com" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <i className="fab fa-tumblr-square fa-lg" />
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="mailto:jr@jacksonreeves.com" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <i className="fas fa-envelope-square fa-lg" />
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="/resume.pdf" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <i className="fas fa-external-link-square-alt fa-lg" />
                            </a>
                        </li>
                    </ul>
                    <Navigation />
                </div>
            </div>
        </header>
    )
}

export default Header