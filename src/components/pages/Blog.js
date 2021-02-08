import Tumblr from '../contents/Tumblr'

function Blog() {
    return (
        <div>
            <h2>Blog</h2>

            <Tumblr />

            <a 
                href="https://programming10101.tumblr.com" 
                target="_blank" 
                rel="noreferrer"
            >
                <button
                    className="btn btn-primary center"
                >
                    Read more posts
                </button>
            </a>
        </div>
    )
}

export default Blog