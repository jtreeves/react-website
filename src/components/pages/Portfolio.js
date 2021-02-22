import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
import ProjectsList from '../elements/ProjectsList'

function Portfolio() {
    return (
        <div>
<Navigation />
        <div class="overcoming-header">
        <main>
        <SectionHeading heading="Projects" />
<ProjectsList max={5} />
            
                <a 
                href="https://github.com/jtreeves" 
                target="_blank" 
                rel="noreferrer"
            >
                <button
                    className="btn btn-dark center top-margin"
                >
                    View more projects
                </button>
            </a>
        </main>
        </div>
        <hr />
        </div>
    )
}

export default Portfolio