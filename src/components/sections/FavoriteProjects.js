import SectionHeading from './SectionHeading'
import ProjectHighlightCard from '../cards/ProjectHighlightCard'
import ProjectsButton from '../elements/ProjectsButton'
import projects from '../../database/projects'

import '../../style/projects.css'

function FavoriteProjects() {
    return (
        <main>
            <SectionHeading heading="Favorite Projects" />

            <div 
                className="three-columns"
                id="portfolio-promotion"
            >
                <ProjectHighlightCard 
                    image={projects.kaleidoscope.image}
                    name={projects.kaleidoscope.name}
                    description={projects.kaleidoscope.description}
                />

                <ProjectHighlightCard 
                    image={projects.regressions.image}
                    name={projects.regressions.name}
                    description={projects.regressions.description}
                />

                <ProjectHighlightCard 
                    image={projects.learnMath.image}
                    name={projects.learnMath.name}
                    description={projects.learnMath.description}
                />
            </div>
            
            <div className="blank-space" />
            
            <ProjectsButton />
        </main>
    )
}

export default FavoriteProjects