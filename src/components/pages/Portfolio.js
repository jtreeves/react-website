import PageOpener from '../sections/PageOpener'
import SectionHeading from '../sections/SectionHeading'
import ProjectsList from '../elements/ProjectsList'
// import CurrentProject from '../sections/CurrentProject'
import Button from '../elements/Button'

import '../../style/projects.css'

function Portfolio() {
    return (
        <div>
            <PageOpener 
                title="Portfolio"
                description="Peruse a list of my projects, and click on their images to learn more about each one"
            />
            
            <div class="overcoming-header">
                <main>
                    <SectionHeading heading="Recent Projects" />

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

                    {/* <CurrentProject /> */}
                </main>
            </div>

            <hr />
        </div>
    )
}

export default Portfolio