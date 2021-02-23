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
                <main>
                    <SectionHeading heading="Posts" />

                    <p className="card card-body">
                        I run a blog on all things related to software engineering called Programming 10101. To read it in its entirety, head on over Tumblr or click the above link. Here are some previews of posts from my two main channels: Thoughts (usually longer, deeper, more thoughtful pieces) and Notes (usually shorter pieces that highlight how to do one thing or another).
                    </p>

                    
                        <Medium />
                    <Dev />
                        

                    
                    
                    
                    
                </main>
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