import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
    return (
        <header>
            <Link to="/">
                <h1>Jackson Reeves</h1> 
            </Link>
            
            <Navigation />
        </header>
    )
}

export default Header