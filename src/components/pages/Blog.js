import Tumblr from '../contents/Tumblr'

function Blog() {
    return (
        <div>
            <h2>Blog</h2>

            <p className="card card-body">
                I run a blog on all things related to software engineering called Programming 10101. To read it in its entirety, head on over Tumblr or click the above link. Here are some previews of posts from my two main channels: Thoughts (usually longer, deeper, more thoughtful pieces) and Notes (usually shorter pieces that highlight how to do one thing or another).
            </p>

            <Tumblr />

            <a 
                href="https://programming10101.tumblr.com" 
                target="_blank" 
                rel="noreferrer"
            >
                <button
                    className="btn btn-dark center"
                >
                    Read more posts
                </button>
            </a>
        </div>
    )
}

export default Blog