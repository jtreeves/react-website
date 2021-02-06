import { useLocation } from 'react-router-dom'

import Introduction from '../sections/Introduction'

import skills from '../../database/skills'
import projects from '../../database/projects'

function Skill() {
    const location = useLocation()
    const specificSkill = location.state.skill
    const name = 'Skill'
    const description = `Here are some projects I have built using ${specificSkill}.`

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />

            {skills[specificSkill]}
        </div>
    )
}

export default Skill