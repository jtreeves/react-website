import { NavLink } from 'react-router-dom'

import scroll from '../../utilities/scroll'

function Navigation() {
    return (
        <ul className="navigation">
            <li>
                <NavLink 
                    exact to="/about" 
                    onClick={scroll}
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
                    onClick={scroll}
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
                    onClick={scroll}
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
                    onClick={scroll}
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
                    onClick={scroll}
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
                    onClick={scroll}
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