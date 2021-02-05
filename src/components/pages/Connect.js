import Introduction from '../sections/Introduction'
import Twitter from '../contents/Twitter'
import GitHub from '../contents/GitHub'

function Connect() {
    return (
        <div>
            <Introduction 
                name="Connect"
                description="Get in touch with me on social media."
            />
            <Twitter />
            <GitHub />
        </div>
    )
}

export default Connect