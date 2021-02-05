import Introduction from '../sections/Introduction'
import Twitter from '../contents/Twitter'
import GitHub from '../contents/GitHub'

function Connect() {
    const name = 'Connect'
    const description = 'Get in touch with me on social media.'

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />
            <Twitter />
            <GitHub />
        </div>
    )
}

export default Connect