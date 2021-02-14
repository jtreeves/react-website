import Twitter from '../contents/Twitter'
import GitHub from '../contents/GitHub'

function Socialize() {
    return (
        <div>
            <h2>Socialize</h2>
            
            <div className="contains-columns">
                <Twitter />
                <GitHub />
            </div>
        </div>
    )
}

export default Socialize