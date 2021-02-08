import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <ul className="navigation">
            <li>
                <NavLink exact to="/about" style={{ textDecoration: 'none' }}>
                    About
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/contact" style={{ textDecoration: 'none' }}>
                    Contact
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/connect" style={{ textDecoration: 'none' }}>
                    Connect
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/blog" style={{ textDecoration: 'none' }}>
                    Blog
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/portfolio" style={{ textDecoration: 'none' }}>
                    Portfolio
                </NavLink>
            </li>
            
            <li>
                <NavLink exact to="/resume" style={{ textDecoration: 'none' }}>
                    Resume
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation