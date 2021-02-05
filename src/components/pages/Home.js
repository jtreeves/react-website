import Portfolio from './Portfolio'
import About from './About'
import Resume from './Resume'
import Blog from './Blog'
import Connect from './Connect'
import Contact from './Contact'

function Home() {
    return (
        <div>
            <Portfolio />
            <About />
            <Resume />
            <Blog />
            <Connect />
            <Contact />
        </div>
    )
}

export default Home