import Introduction from '../sections/Introduction'
import Tumblr from '../contents/Tumblr'

function Blog() {
    return (
        <div>
            <Introduction 
                name="Blog"
                description="Here are my most recent blog posts"
            />
            <Tumblr />
        </div>
    )
}

export default Blog