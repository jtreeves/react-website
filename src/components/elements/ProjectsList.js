import ProjectHighlight from '../sections/ProjectHighlight'

import projects from '../../database/projects'

function ProjectsList(props) { 
    const projectArray = []
    if (projectArray.length < props.max) {
        for (const project in projects) {
            projectArray.push(project)
        }   
    }

    const projectSet = projectArray.map((project, index) => { 
        return (
            <ProjectHighlight 
                image={projects[project].image}
                name={projects[project].name}
                description={projects[project].description}
                skills={projects[project].skills}
                deployedLink={projects[project].deployedLink}
                deployedText={projects[project].type}
                repositoryLink={projects[project].repositoryLink}
                repositoryText="Code"
                date={projects[project].date}
            />
        )  
    })

    return (
        <div className="projects-list">
            {projectSet}
        </div>
    )
}

export default ProjectsList