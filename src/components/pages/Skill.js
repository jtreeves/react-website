import { useLocation } from 'react-router-dom'

import Introduction from '../sections/Introduction'
import Card from '../elements/Card'

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
                <Card
                    image={projects[project].image}
                    title={projects[project].name}
                    danger={false}
                    text={projects[project].description}
                    source={false}
                    cloud={projects[project].skills}
                    link={projects[project].deployedLink}
                    button={projects[project].type}
                    otherLink={projects[project].repositoryLink}
                    otherButton="Repo"
                    time={projects[project].date}
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