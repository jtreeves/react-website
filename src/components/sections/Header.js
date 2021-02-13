import { Link } from 'react-router-dom'

import SocialIcons from './SocialIcons'
import Navigation from './Navigation'

function Header() {
    return (
        <header>
            <div className="contains-columns">
                <div className="left-column">
                    <Link 
                        to="/" 
                        className="headline"
                    >
                        <h1>Jackson Reeves</h1> 
                    </Link>
                </div>

                <div className="right-column">
                    <SocialIcons />
                    <Navigation />
                </div>
            </div>
        </header>
    )
}

export default Header