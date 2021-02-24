import Dev from '../contents/Dev'
import Medium from '../contents/Medium'
import Tumblr from '../contents/Tumblr'
import YouTube from '../contents/YouTube'
import Twitter from '../contents/Twitter'
import GitHub from '../contents/GitHub'
import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'

function Posts() {
    return (
        <div>
            <Navigation />
            
            <div class="overcoming-header">
                
                <Medium />
                <Dev />
                <Tumblr />
                <GitHub />
                <Twitter />
                <YouTube />
            </div>

            <hr />
        </div>
    )
}

export default Posts