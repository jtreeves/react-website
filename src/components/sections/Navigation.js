import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <ul className="navigation">
            <li>
                <NavLink 
                    exact to="/about" 
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