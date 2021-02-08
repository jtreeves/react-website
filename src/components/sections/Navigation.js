import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <ul className="navigation">
            <li>
                <NavLink 
                    exact to="/about" 
                    style={{ 
                        textDecoration: "none", 
                        color: "white" 
                    }}
                >
                    About
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/contact" 
                    style={{ 
                        textDecoration: "none", 
                        color: "white" 
                    }}
                >
                    Contact
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/connect" 
                    style={{ 
                        textDecoration: "none", 
                        color: "white" 
                    }}
                >
                    Connect
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/blog" 
                    style={{ 
                        textDecoration: "none", 
                        color: "white" 
                    }}
                >
                    Blog
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/portfolio" 
                    style={{ 
                        textDecoration: "none", 
                        color: "white" 
                    }}
                >
                    Portfolio
                </NavLink>
            </li>
            
            <li>
                <NavLink 
                    exact to="/resume" 
                    style={{ 
                        textDecoration: "none", 
                        color: "white" 
                    }}
                >
                    Resume
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation