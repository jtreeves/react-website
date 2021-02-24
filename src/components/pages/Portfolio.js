import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
import ProjectsList from '../elements/ProjectsList'
import Button from '../elements/Button'

function Portfolio() {
    return (
        <div>
            <Navigation />
            
            <div class="overcoming-header">
                <main>
                    <SectionHeading heading="Projects" />

                    <div className="about-card">
                        Checkout some of my major projects. Click on the images to learn more about each project. To view even more of my projects, visit my GitHub account.
                    </div>

                    <div className="blank-space" />

                    <ProjectsList max={6} />

                    <div className="blank-space" />
                    
                    <div className="center">
                        <Button 
                            link="https://github.com/jtreeves"
                            target="_blank"
                            text="View all projects"
                        />
                    </div>
                </main>
            </div>

            <hr />
        </div>
    )
}

export default Portfolio