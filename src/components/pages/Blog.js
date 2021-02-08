import Introduction from '../sections/Introduction'
import Tumblr from '../contents/Tumblr'

function Blog() {
    const name = 'Blog'
    const description = 'Here are my most recent blog posts.'
    
    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />

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