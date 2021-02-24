import { Route } from 'react-router-dom'

import Header from './components/sections/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Posts from './components/pages/Posts'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import Skill from './components/pages/Skill'
import Project from './components/pages/Project'
import Footer from './components/sections/Footer'
import AllSkills from './components/pages/AllSkills'

import './App.css'

function App() {
    return (
        <>
            <Header />
            
            <Route 
                exact path="/" 
                component={Home}
            />

            <Route 
                path="/about" 
                component={About}
            />

            <Route 
                path="/contact" 
                component={Contact}
            />

            <Route 
                path="/posts" 
                component={Posts}
            />

            <Route 
                path="/portfolio" 
                component={Portfolio}
            />
            
            <Route 
                path="/skills" 
                component={AllSkills}
            />

            <Route 
                path="/resume" 
                component={Resume}
            />
            
            <Route 
                path="/skill" 
                component={Skill}
            />
            
            <Route 
                path="/project" 
                component={Project}
            />
            
            <Footer />
        </>
    )
}

export default App