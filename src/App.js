import { Route } from 'react-router-dom'

import Header from './components/sections/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Connect from './components/pages/Connect'
import Blog from './components/pages/Blog'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import Footer from './components/sections/Footer'

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
                path="/connect" 
                component={Connect}
            />

            <Route 
                path="/blog" 
                component={Blog}
            />

            <Route 
                path="/portfolio" 
                component={Portfolio}
            />

            <Route 
                path="/resume" 
                component={Resume}
            />
            
            <Footer />
        </>
    )
}

export default App