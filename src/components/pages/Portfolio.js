import Introduction from '../sections/Introduction'
import Card from '../elements/Card'

import projects from '../../database/projects'

function Portfolio() {
    const name = 'Portfolio'
    const description = 'Here are some of my recent projects.'

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />

            <Card
                image={projects.regressions.image}
                title={projects.regressions.name}
                danger={false}
                text={projects.regressions.description}
                source={false}
                cloud={projects.regressions.skills}
                link={projects.regressions.deployedLink}
                button={projects.regressions.type}
                otherLink={projects.regressions.repositoryLink}
                otherButton="Repo"
                time={projects.regressions.date}
            />
            
            <Card
                image={projects.kaleidoscope.image}
                title={projects.kaleidoscope.name}
                danger={false}
                text={projects.kaleidoscope.description}
                source={false}
                cloud={projects.kaleidoscope.skills}
                link={projects.kaleidoscope.deployedLink}
                button={projects.kaleidoscope.type}
                otherLink={projects.kaleidoscope.repositoryLink}
                otherButton="Repo"
                time={projects.kaleidoscope.date}
            />

            <Card
                image={projects.tiresias.image}
                title={projects.tiresias.name}
                danger={false}
                text={projects.tiresias.description}
                source={false}
                cloud={projects.tiresias.skills}
                link={projects.tiresias.deployedLink}
                button={projects.tiresias.type}
                otherLink={projects.tiresias.repositoryLink}
                otherButton="Repo"
                time={projects.tiresias.date}
            />

            <Card
                image={projects.matchesAndPatches.image}
                title={projects.matchesAndPatches.name}
                danger={false}
                text={projects.matchesAndPatches.description}
                source={false}
                cloud={projects.matchesAndPatches.skills}
                link={projects.matchesAndPatches.deployedLink}
                button={projects.matchesAndPatches.type}
                otherLink={projects.matchesAndPatches.repositoryLink}
                otherButton="Repo"
                time={projects.matchesAndPatches.date}
            />

            <Card
                image={projects.readThisNext.image}
                title={projects.readThisNext.name}
                danger={false}
                text={projects.readThisNext.description}
                source={false}
                cloud={projects.readThisNext.skills}
                link={projects.readThisNext.deployedLink}
                button={projects.readThisNext.type}
                otherLink={projects.readThisNext.repositoryLink}
                otherButton="Repo"
                time={projects.readThisNext.date}
            />
        </div>
    )
}

export default Portfolio