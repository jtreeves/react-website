import PageOpener from '../sections/PageOpener'
import Medium from '../contents/Medium'
import Dev from '../contents/Dev'
import Tumblr from '../contents/Tumblr'
import GitHub from '../contents/GitHub'
import Twitter from '../contents/Twitter'
import YouTube from '../contents/YouTube'

function Posts() {
    return (
        <div>
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