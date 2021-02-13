import ProjectHighlight from '../sections/ProjectHighlight'

import projects from '../../database/projects'

function Home() {
    return (
        <div>
            <div className="contains-columns">
                <div className="left-column">
                    <ProjectHighlight 
                        image={projects.regressions.image}
                        name={projects.regressions.name}
                        description={projects.regressions.description}
                        skills={projects.regressions.skills}
                        deployedLink={projects.regressions.deployedLink}
                        deployedText={projects.regressions.type}
                        repositoryLink={projects.regressions.repositoryLink}
                        repositoryText="Code"
                        date={projects.regressions.date}
                    />

                    <ProjectHighlight 
                        image={projects.tiresias.image}
                        name={projects.tiresias.name}
                        description={projects.tiresias.description}
                        skills={projects.tiresias.skills}
                        deployedLink={projects.tiresias.deployedLink}
                        deployedText={projects.tiresias.type}
                        repositoryLink={projects.tiresias.repositoryLink}
                        repositoryText="Code"
                        date={projects.tiresias.date}
                    />
                </div>

                <div className="right-column">
                    <ProjectHighlight 
                        image={projects.kaleidoscope.image}
                        name={projects.kaleidoscope.name}
                        description={projects.kaleidoscope.description}
                        skills={projects.kaleidoscope.skills}
                        deployedLink={projects.kaleidoscope.deployedLink}
                        deployedText={projects.kaleidoscope.type}
                        repositoryLink={projects.kaleidoscope.repositoryLink}
                        repositoryText="Code"
                        date={projects.kaleidoscope.date}
                    />

                    <ProjectHighlight 
                        image={projects.readThisNext.image}
                        name={projects.readThisNext.name}
                        description={projects.readThisNext.description}
                        skills={projects.readThisNext.skills}
                        deployedLink={projects.readThisNext.deployedLink}
                        deployedText={projects.readThisNext.type}
                        repositoryLink={projects.readThisNext.repositoryLink}
                        repositoryText="Code"
                        date={projects.readThisNext.date}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home