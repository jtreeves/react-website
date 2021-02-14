import Portfolio from './Portfolio'
import Contact from './Contact'
import AllSkills from './AllSkills'
import Introduction from '../sections/Introduction'

function Home() {
    return (
        <div>
            <Introduction />
            <hr />
            <Portfolio />
            <hr />
            <AllSkills />
            <hr />
            <Contact />
        </div>
    )
}

export default Home