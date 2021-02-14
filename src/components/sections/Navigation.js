import { NavLink } from 'react-router-dom'

import scroll from '../../utilities/scroll'

function Navigation() {
    return (
        <ul className="navigation">
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
                {/* <a href="#contact">Contact</a> */}
            </li>

            <li>
                <NavLink 
                    exact to="/connect" 
                    onClick={scroll}
                    className="navigation-links"
                >
                    Connect
                </NavLink>
            </li>

            <li>
                <NavLink 
                    exact to="/blog" 
                    onClick={scroll}
                    className="navigation-links"
                >
                    Blog
                </NavLink>
            </li>

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
        </ul>
    )
}

export default Navigation