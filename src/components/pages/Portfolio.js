import Introduction from '../sections/Introduction'
import Project from '../sections/Project'

import projects from '../../database/projects'

function Portfolio() {
    const name = 'Portfolio'
    const description = 'Here are some of my recent projects.'

    const regressions = {
        name: 'Regressions',
        description: 'A Python library of algorithms to calculate regression models',
        skills: projects.regressions,
        type: 'Library',
        image: '/images/regressions.png',
        deployedLink: 'https://pypi.org/project/regressions/',
        repositoryLink: 'https://github.com/jtreeves/regressions_library'
    }

    const kaleidoscope = {
        name: 'Kaleidoscope',
        description: 'A budget app',
        skills: ['JavaScript', 'React', 'Express', 'MongoDB'],
        type: 'App',
        image: '/images/kaleidoscope.png',
        deployedLink: 'https://kaleidoscope-budget.herokuapp.com',
        repositoryLink: 'https://github.com/jtreeves/budget-frontend'
    }

    const tiresias = {
        name: 'Tiresias',
        description: 'An app for generating regressions models',
        skills: ['JavaScript', 'React', 'Express', 'MongoDB'],
        type: 'App',
        image: '/images/tiresias.png',
        deployedLink: 'https://tiresias-predictions.herokuapp.com',
        repositoryLink: 'https://github.com/jtreeves/predictions-frontend'
    }

    const matchesAndPatches = {
        name: 'Matches and Patches',
        description: 'A game involving elements of Dominoes and Uno',
        skills: ['JavaScript', 'HTML', 'CSS'],
        type: 'App',
        image: '/images/matches-and-patches.png',
        deployedLink: 'https://jtreeves.github.io',
        repositoryLink: 'https://github.com/jtreeves/matches-and-patches'
    }

    const readThisNext = {
        name: 'Read This next',
        description: 'A reading app',
        skills: ['JavaScript', 'Express', 'SQL'],
        type: 'App',
        image: '/images/read-this-next.png',
        deployedLink: 'https://read-this-next.herokuapp.com',
        repositoryLink: 'https://github.com/jtreeves/read-this-next'
    }

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />

            <Project
                name={regressions.name}
                description={regressions.description}
                skills={regressions.skills}
                type={regressions.type}
                image={regressions.image}
                deployedLink={regressions.deployedLink}
                repositoryLink={regressions.repositoryLink}
            />
            
            <Project
                name={kaleidoscope.name}
                description={kaleidoscope.description}
                skills={kaleidoscope.skills}
                type={kaleidoscope.type}
                image={kaleidoscope.image}
                deployedLink={kaleidoscope.deployedLink}
                repositoryLink={kaleidoscope.repositoryLink}
            />

            <Project
                name={tiresias.name}
                description={tiresias.description}
                skills={tiresias.skills}
                type={tiresias.type}
                image={tiresias.image}
                deployedLink={tiresias.deployedLink}
                repositoryLink={tiresias.repositoryLink}
            />

            <Project
                name={matchesAndPatches.name}
                description={matchesAndPatches.description}
                skills={matchesAndPatches.skills}
                type={matchesAndPatches.type}
                image={matchesAndPatches.image}
                deployedLink={matchesAndPatches.deployedLink}
                repositoryLink={matchesAndPatches.repositoryLink}
            />

            <Project
                name={readThisNext.name}
                description={readThisNext.description}
                skills={readThisNext.skills}
                type={readThisNext.type}
                image={readThisNext.image}
                deployedLink={readThisNext.deployedLink}
                repositoryLink={readThisNext.repositoryLink}
            />
        </div>
    )
}

export default Portfolio