import { useLocation } from 'react-router-dom'

import Card from '../elements/Card'

import skills from '../../database/skills'
import projects from '../../database/projects'

function Skill() {
    const location = useLocation()
    const specificSkill = location.state.skill

    const projectList = skills[specificSkill].map((project, index) => {
        return (
            <div key={index}>
                <Card
                    image={projects[project].image}
                    title={projects[project].name}
                    subtitle={false}
                    danger={false}
                    list={false}
                    text={projects[project].description}
                    source={false}
                    cloud={projects[project].skills}
                    link={projects[project].deployedLink}
                    button={projects[project].type}
                    otherLink={projects[project].repositoryLink}
                    otherButton="Code"
                    time={projects[project].date}
                />
            </div>
        )
    })

    return (
        <div>
            <h2>{specificSkill}</h2>

            <p>
                Here are some projects I have built using {specificSkill}.
            </p>

            {projectList}
        </div>
    )
}

export default Skill