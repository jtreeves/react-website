import ProjectHighlightCard from '../cards/ProjectHighlightCard'
import projects from '../../database/projects'

function ProjectsList(props) { 
    const projectArray = []
    
    for (const project in projects) {
        projectArray.push(project)
    }   
    
    const projectSet = projectArray.map((project, index) => {
        if (index < props.max) {
            return (
                <ProjectHighlightCard 
                    image={projects[project].image}
                    name={projects[project].name}
                    description={projects[project].description}
                />
            )  
        } else {
            return null
        } 
    })

    return (
        <div className="projects-list">
            {projectSet}
        </div>
    )
}

export default ProjectsList