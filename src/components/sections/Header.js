import { Link } from 'react-router-dom'

import scroll from '../../utilities/scroll'
import SocialIcons from './SocialIcons'
import Tooltips from './Tooltips'

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
        
            <div className="nav-icons">
                <SocialIcons />
                <Tooltips />
            </div>
        </header>
    )
}

export default Header