import { Route } from 'react-router-dom'

import Footer from './components/elements/Footer'
import Header from './components/elements/Header'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Connect from './components/pages/Connect'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'

import './App.css'

function App() {
    return (
        <>
            <Header />
            <Route 
                exact path="/" 
                component={Portfolio}
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