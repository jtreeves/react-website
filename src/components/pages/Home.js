import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import AllSkills from '../sections/AllSkills'

function Home() {
    return (
        <div>
            <About />
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