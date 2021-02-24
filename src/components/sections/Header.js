import { Link } from 'react-router-dom'

import scroll from '../../utilities/scroll'
import SocialIcons from './SocialIcons'

function Header() {
    return (
        <header>
            <Link 
                exact to="/" 
                onClick={scroll}
                className="headline"
            >
                <h1>Jackson Reeves</h1> 
            </Link>
        
            <SocialIcons />
        </header>
    )
}

export default Header