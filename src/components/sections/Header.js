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
                                <img 
                                    src="/images/social/github.png" 
                                    alt="GitHub"
                                />
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/jacksonreeves/" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <img 
                                    src="/images/social/linkedin.png" 
                                    alt="LinkedIn"
                                />
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="https://twitter.com/JTReeves" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <img 
                                    src="/images/social/twitter.png" 
                                    alt="Twitter"
                                />
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="https://programming10101.tumblr.com" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <img 
                                    src="/images/social/tumblr.png" 
                                    alt="Tumblr"
                                />
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