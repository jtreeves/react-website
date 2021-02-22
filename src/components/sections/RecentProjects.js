import ProjectHighlight from '../sections/ProjectHighlight'

import projects from '../../database/projects'

function RecentProjects() {
    return (
        <div className="recent-projects">
            <div className="recent-projects-intro">
                <div className="recent-projects-intro-left">
                    <hr />
                </div>

                <div className="recent-projects-intro-center">
                    Recent Projects
                </div>

                <div className="recent-projects-intro-right">
                    <hr />
                </div>
            </div>

            <div className="recent-projects-list">
                <ProjectHighlight 
                    image={projects.regressions.image}
                    name={projects.regressions.name}
                    description={projects.regressions.description}
                    skills={projects.regressions.skills}
                    deployedLink={projects.regressions.deployedLink}
                    deployedText={projects.regressions.type}
                    repositoryLink={projects.regressions.repositoryLink}
                    repositoryText="Code"
                    date={projects.regressions.date}
                />

                <ProjectHighlight 
                    image={projects.kaleidoscope.image}
                    name={projects.kaleidoscope.name}
                    description={projects.kaleidoscope.description}
                    skills={projects.kaleidoscope.skills}
                    deployedLink={projects.kaleidoscope.deployedLink}
                    deployedText={projects.kaleidoscope.type}
                    repositoryLink={projects.kaleidoscope.repositoryLink}
                    repositoryText="Code"
                    date={projects.kaleidoscope.date}
                />

                <ProjectHighlight 
                    image={projects.tiresias.image}
                    name={projects.tiresias.name}
                    description={projects.tiresias.description}
                    skills={projects.tiresias.skills}
                    deployedLink={projects.tiresias.deployedLink}
                    deployedText={projects.tiresias.type}
                    repositoryLink={projects.tiresias.repositoryLink}
                    repositoryText="Code"
                    date={projects.tiresias.date}
                />
            </div>
        </div>
    )
}

export default RecentProjects