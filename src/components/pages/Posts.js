import Dev from '../contents/Dev'
import Medium from '../contents/Medium'
import Tumblr from '../contents/Tumblr'
import YouTube from '../contents/YouTube'
import Twitter from '../contents/Twitter'
import GitHub from '../contents/GitHub'
import Navigation from '../sections/Navigation'
import PageOpener from '../sections/PageOpener'

function Posts() {
    return (
        <div>
            {/* <Navigation /> */}
            <PageOpener 
                title="Posts"
                description="I'm active on various social platforms. Here are some of my latest posts."
            />
            
            <div class="overcoming-header">
                <Medium />
                <Dev />
                <Tumblr category="resources" />
                <Tumblr category="photos" />
                <GitHub />
                <Twitter />
                <YouTube />
            </div>

            <hr />
        </div>
    )
}

export default Posts