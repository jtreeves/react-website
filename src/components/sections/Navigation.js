import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <ul>
            <li>
                <NavLink exact to="/about">
                    About
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/contact">
                    Contact
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/connect">
                    Connect
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/blog">
                    Blog
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/portfolio">
                    Portfolio
                </NavLink>
            </li>
            
            <li>
                <NavLink exact to="/resume">
                    Resume
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation