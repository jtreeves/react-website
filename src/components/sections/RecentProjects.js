import SectionHeading from './SectionHeading'
import ProjectsList from '../elements/ProjectsList'
import ProjectsButton from '../elements/ProjectsButton'

function RecentProjects() {
    return (
        <main>
            <SectionHeading heading="Recent Projects" />

            <ProjectsList 
                max={3} 
                id="portfolio-promotion"
            />
            
            <div className="blank-space" />
            
            <ProjectsButton />
        </main>
    )
}

export default RecentProjects