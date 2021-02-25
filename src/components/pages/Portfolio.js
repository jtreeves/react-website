import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
import ProjectsList from '../elements/ProjectsList'
import Button from '../elements/Button'
import PageOpener from '../sections/PageOpener'
import CurrentProject from '../sections/CurrentProject'

function Portfolio() {
    return (
        <div>
            <PageOpener 
                title="Portfolio"
                description="Checkout some of my major projects. Click on the images to learn more about each project. To view even more of my projects, visit my GitHub account."
            />
            
            <div class="overcoming-header">
                <main>
                    <ProjectsList max={6} />

                    <div className="blank-space" />
                    
                    <div className="center">
                        <Button 
                            link="https://github.com/jtreeves"
                            target="_blank"
                            text="View all projects"
                        />
                    </div>

                    <div className="blank-space" />

                    <CurrentProject />
                </main>
            </div>

            <hr />
        </div>
    )
}

export default Portfolio