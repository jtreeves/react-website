import { useLocation } from 'react-router-dom'

import Introduction from '../sections/Introduction'

function Skill() {
    const location = useLocation()
    const name = 'Skill'
    const description = `Here are some projects I have built using ${location.state.skill}.`

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />
        </div>
    )
}

export default Skill