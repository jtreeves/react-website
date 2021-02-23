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

                    <p>
                        Checkout some of my major projects. Click on the images to learn more about each project. To view even more of my projects, visit my GitHub account.
                    </p>

                    <ProjectsList max={6} />
                    
                    <div className="center">
                        <Button 
                            link="https://github.com/jtreeves"
                            text="View more projects"
                        />
                    </div>
                </main>
            </div>

            <hr />
        </div>
    )
}

export default Portfolio