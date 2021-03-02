import { Route } from 'react-router-dom'

import Header from './components/sections/Header'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Project from './components/pages/Project'
import Resume from './components/pages/Resume'
import AllSkills from './components/pages/AllSkills'
import Skill from './components/pages/Skill'
import Posts from './components/pages/Posts'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/sections/Footer'
import Testimonials from './components/pages/Testimonials'

import './style/main.css'

function App() {
    return (
        <>
            <Header />
            
            <Route 
                exact path="/" 
                component={Home}
            />

            <Route 
                path="/portfolio" 
                component={Portfolio}
            />

            <Route 
                path="/project" 
                component={Project}
            />

            <Route 
                path="/resume" 
                component={Resume}
            />
            
            <Route 
                path="/testimonials" 
                component={Testimonials}
            />

            <Route 
                path="/skills" 
                component={AllSkills}
            />

            <Route 
                path="/skill" 
                component={Skill}
            />

            <Route 
                path="/posts" 
                component={Posts}
            />

            <Route 
                path="/about" 
                component={About}
            />

            <Route 
                path="/contact" 
                component={Contact}
            />

            <Footer />
        </>
    )
}

export default App