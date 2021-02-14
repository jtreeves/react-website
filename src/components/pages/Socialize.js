import Twitter from '../contents/Twitter'
import GitHub from '../contents/GitHub'

function Socialize() {
    return (
        <div>
            <h2>Socialize</h2>

            <p className="card card-body">
                I'm active on many social media sites, including Twitter and GitHub. Check out my latest activity below, or click on the icons above to follow me on those platforms.
            </p>
            
            <div className="contains-columns">
                <Twitter />
                <GitHub />
            </div>
        </div>
    )
}

export default Socialize