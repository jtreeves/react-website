import ProjectHighlight from '../sections/ProjectHighlight'

import projects from '../../database/projects'

function Home() {
    return (
        <div>
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
        </div>
    )
}

export default Home