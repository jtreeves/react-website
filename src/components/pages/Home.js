import ProjectHighlight from '../sections/ProjectHighlight'

import projects from '../../database/projects'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

function Home() {
    return (
        <div>
            <About />
            <hr />

            <Portfolio />
            <div className="blank-space" />
            <hr />
            <section id="contact">

            <Contact />
            </section>

        </div>
    )
}

export default Home