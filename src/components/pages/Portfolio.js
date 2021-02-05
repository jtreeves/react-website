import Introduction from '../sections/Introduction'
import Project from '../sections/Project'

function Portfolio() {
    const name = 'Portfolio'
    const description = 'Here are some of my recent projects.'

    const kaleidoscope = {
        name: 'Kaleidoscope',
        description: 'A budget app',
        image: '/images/kaleidoscope.png',
        deployedLink: 'https://kaleidoscope-budget.herokuapp.com',
        repositoryLink: 'https://github.com/jtreeves/budget-frontend'
    }

    const tiresias = {
        name: 'Tiresias',
        description: 'An app for generating regressions models',
        image: '/images/tiresias.png',
        deployedLink: 'https://tiresias-predictions.herokuapp.com',
        repositoryLink: 'https://github.com/jtreeves/predictions-frontend'
    }

    const readThisNext = {
        name: 'Read This next',
        description: 'A reading app',
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
                name={kaleidoscope.name}
                description={kaleidoscope.description}
                image={kaleidoscope.image}
                deployedLink={kaleidoscope.deployedLink}
                repositoryLink={kaleidoscope.repositoryLink}
            />
            <Project
                name={tiresias.name}
                description={tiresias.description}
                image={tiresias.image}
                deployedLink={tiresias.deployedLink}
                repositoryLink={tiresias.repositoryLink}
            />
            <Project
                name={readThisNext.name}
                description={readThisNext.description}
                image={readThisNext.image}
                deployedLink={readThisNext.deployedLink}
                repositoryLink={readThisNext.repositoryLink}
            />
        </div>
    )
}

export default Portfolio