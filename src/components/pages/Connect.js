import Twitter from '../contents/Twitter'
import GitHub from '../contents/GitHub'

function Connect() {
    return (
        <div>
            <h2>Connect</h2>
            
            <div className="contains-columns">
                <Twitter />
                <GitHub />
            </div>
        </div>
    )
}

export default Connect