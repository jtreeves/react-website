import { NavLink } from 'react-router-dom'

function Navigation() {
    function scrollToTop() {
        window.scrollTo(0, 0)
    }

    return (
        <ul className="navigation">
            <li>
                <NavLink 
                    exact to="/about" 
                    onClick={scrollToTop}
                    style={{ 
                        textDecoration: "none", 
                        color: "black" 
                    }}
                >
                    About
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/contact" 
                    onClick={scrollToTop}
                    style={{ 
                        textDecoration: "none", 
                        color: "black" 
                    }}
                >
                    Contact
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/connect" 
                    onClick={scrollToTop}
                    style={{ 
                        textDecoration: "none", 
                        color: "black" 
                    }}
                >
                    Connect
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/blog" 
                    onClick={scrollToTop}
                    style={{ 
                        textDecoration: "none", 
                        color: "black" 
                    }}
                >
                    Blog
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/portfolio" 
                    onClick={scrollToTop}
                    style={{ 
                        textDecoration: "none", 
                        color: "black" 
                    }}
                >
                    Portfolio
                </NavLink>
            </li>
            
            <li>
                <NavLink 
                    exact to="/resume" 
                    onClick={scrollToTop}
                    style={{ 
                        textDecoration: "none", 
                        color: "black" 
                    }}
                >
                    Resume
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation