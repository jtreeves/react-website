import { useLocation } from 'react-router-dom'

import Introduction from '../sections/Introduction'
import Project from '../sections/Project'

import skills from '../../database/skills'
import projects from '../../database/projects'

function Skill() {
    const location = useLocation()
    const specificSkill = location.state.skill
    const name = specificSkill
    const description = `Here are some projects I have built using ${specificSkill}.`

    const projectList = skills[specificSkill].map((project, index) => {
        return (
            <div key={index}>
                <Project
                    name={projects[project].name}
                    description={projects[project].description}
                    skills={projects[project].skills}
                    type={projects[project].type}
                    image={projects[project].image}
                    deployedLink={projects[project].deployedLink}
                    repositoryLink={projects[project].repositoryLink}
                />
            </div>
        )
    })

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />

            {projectList}
        </div>
    )
}

export default Skill