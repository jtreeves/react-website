import { useLocation } from 'react-router-dom'

import Card from '../elements/Card'
import projects from '../../database/projects'

function Project() {
    const location = useLocation()
    const specificProject = location.state.project
    let lowercase = ''
    for (let project in projects) {
        if (projects[project].name === specificProject) {
            lowercase = project
        }
    }

    return (
        <div>
            <h2>{specificProject}</h2>

            <Card
                image={projects[lowercase].image}
                title={projects[lowercase].name}
                subtitle={false}
                lead={false}
                danger={false}
                list={false}
                text={projects[lowercase].description}
                source={false}
                cloud={projects[lowercase].skills}
                link={projects[lowercase].deployedLink}
                button={projects[lowercase].type}
                otherLink={projects[lowercase].repositoryLink}
                otherButton="Code"
                time={projects[lowercase].date}
            />
        </div>
    )
}

export default Project