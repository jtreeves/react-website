import Introduction from '../sections/Introduction'
import Project from '../sections/Project'

function Portfolio() {
    const name = 'Portfolio'
    const description = 'Here are some of my recent projects.'

    const firstProject = {
        name: 'Kaleidoscope',
        description: 'A budget app',
        image: '/images/kaleidoscope.png',
        deployedLink: 'https://kaleidoscope-budget.herokuapp.com',
        repositoryLink: 'https://github.com/jtreeves/budget-frontend'
    }

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />
            <Project
                name={firstProject.name}
                description={firstProject.description}
                image={firstProject.image}
                deployedLink={firstProject.deployedLink}
                repositoryLink={firstProject.repositoryLink}
            />
        </div>
    )
}

export default Portfolio