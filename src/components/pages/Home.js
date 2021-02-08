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
            <hr />
            <About />
            <hr />
            <Resume />
            <hr />
            <Blog />
            <hr />
            <Connect />
            <hr />
            <Contact />
        </div>
    )
}

export default Home