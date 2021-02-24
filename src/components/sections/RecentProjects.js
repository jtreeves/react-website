import SectionHeading from './SectionHeading'
import ProjectsList from '../elements/ProjectsList'
import Button from '../elements/Button'

function RecentProjects() {
    return (
        <main>
            <SectionHeading heading="Recent Projects" />

            <ProjectsList max={3} />
            
            <div className="blank-space" />
            
            <div className="center">
                <Button 
                    link="/portfolio"
                    target="_self"
                    text="View more projects"
                />
            </div>
        </main>
    )
}

export default RecentProjects