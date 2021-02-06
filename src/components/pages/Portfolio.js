import Introduction from '../sections/Introduction'
import Project from '../sections/Project'

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

            <Project
                name={projects.regressions.name}
                description={projects.regressions.description}
                skills={projects.regressions.skills}
                type={projects.regressions.type}
                image={projects.regressions.image}
                deployedLink={projects.regressions.deployedLink}
                repositoryLink={projects.regressions.repositoryLink}
            />
            
            <Project
                name={projects.kaleidoscope.name}
                description={projects.kaleidoscope.description}
                skills={projects.kaleidoscope.skills}
                type={projects.kaleidoscope.type}
                image={projects.kaleidoscope.image}
                deployedLink={projects.kaleidoscope.deployedLink}
                repositoryLink={projects.kaleidoscope.repositoryLink}
            />

            <Project
                name={projects.tiresias.name}
                description={projects.tiresias.description}
                skills={projects.tiresias.skills}
                type={projects.tiresias.type}
                image={projects.tiresias.image}
                deployedLink={projects.tiresias.deployedLink}
                repositoryLink={projects.tiresias.repositoryLink}
            />

            <Project
                name={projects.matchesAndPatches.name}
                description={projects.matchesAndPatches.description}
                skills={projects.matchesAndPatches.skills}
                type={projects.matchesAndPatches.type}
                image={projects.matchesAndPatches.image}
                deployedLink={projects.matchesAndPatches.deployedLink}
                repositoryLink={projects.matchesAndPatches.repositoryLink}
            />

            <Project
                name={projects.readThisNext.name}
                description={projects.readThisNext.description}
                skills={projects.readThisNext.skills}
                type={projects.readThisNext.type}
                image={projects.readThisNext.image}
                deployedLink={projects.readThisNext.deployedLink}
                repositoryLink={projects.readThisNext.repositoryLink}
            />
        </div>
    )
}

export default Portfolio