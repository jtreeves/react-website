import SectionHeading from './SectionHeading'
import ProjectHighlight from '../elements/ProjectHighlight'
import ProjectsButton from '../elements/ProjectsButton'
import projects from '../../database/projects'

import '../../style/projects.css'

function FavoriteProjects() {
    return (
        <main>
            <SectionHeading heading="Favorite Projects" />

            <div className="three-columns">
                <ProjectHighlight 
                    image={projects.kaleidoscope.image}
                    name={projects.kaleidoscope.name}
                    description={projects.kaleidoscope.description}
                />

                <ProjectHighlight 
                    image={projects.regressions.image}
                    name={projects.regressions.name}
                    description={projects.regressions.description}
                />

                <ProjectHighlight 
                    image={projects.readThisNext.image}
                    name={projects.readThisNext.name}
                    description={projects.readThisNext.description}
                />
            </div>
            
            <div className="blank-space" />
            
            <ProjectsButton />
        </main>
    )
}

export default FavoriteProjects