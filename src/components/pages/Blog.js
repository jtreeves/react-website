import Introduction from '../sections/Introduction'
import Tumblr from '../contents/Tumblr'

function Blog() {
    const name = 'Blog'
    const description = 'Here are my most recent blog posts'
    
    return (
        <main>
            <Introduction 
                name={name}
                description={description}
            />
            
            <Tumblr />
        </main>
    )
}

export default Blog