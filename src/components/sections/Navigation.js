import { NavLink } from 'react-router-dom'

import scroll from '../../utilities/scroll'

function Navigation() {
    return (
        <ul className="navigation">
            <li>
                <NavLink 
                    exact to="/portfolio" 
                    onClick={scroll}
                    className="navigation-links"
                >
                    Portfolio
                </NavLink>
            </li>
            
            <li>
                <NavLink 
                    exact to="/resume" 
                    onClick={scroll}
                    className="navigation-links"
                >
                    Resume
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/skills" 
                    onClick={scroll}
                    className="navigation-links"
                >
                    Skills
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/posts" 
                    onClick={scroll}
                    className="navigation-links"
                >
                    Posts
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/about" 
                    onClick={scroll}
                    className="navigation-links"
                >
                    About
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/contact" 
                    onClick={scroll}
                    className="navigation-links"
                >
                    Contact
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation