import SectionHeading from './SectionHeading'
import ProjectsList from '../elements/ProjectsList'

function RecentProjects() {
    return (
        <main>
            <SectionHeading heading="Recent Projects" />
            <ProjectsList max="4" />
        </main>
    )
}

export default RecentProjects