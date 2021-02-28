import { regressionsFirstSnippet, regressionsSecondSnippet } from '../snippets'

const regressions = {
    name: 'Regressions',
    description: 'An algorithm library',
    summary: `A collection of Python algorithms for fitting data to different functional models by using matrices. This library is publically available via PyPi's database of libraries. It contains all the code for determining regression equations, as well as the code for evaluating said regressions and presenting their results in a raw format.`,
    inspiration: 'I wanted a single library that people could download to calculate a variety of regression models. When I researched it, I could not find one that contained all the models that I wanted, especially sinusoidal and logistic models.',
    features: [
        'Linear regression',
        'Quadratic regression',
        'Cubic regression',
        'Hyperbolic regression',
        'Exponential regression',
        'Logarithmic regression'
    ],
    stretches: [
        'Use machine learning to generate sinusoidal and logistic regression models',
        'Provide the user an option to evaluate models at specific inputs, as opposed to just providing them with constants that they can use to build the models on their own'
    ],
    userStories: [
        'As a user, I want to be able to install the library on my computer, so I can use it in my own programs',
        'As a user, I want to be able to generate multiple regression models at once, so I can simplify the amount of code that I need to write myself'
    ],
    skills: {
        'Algorithms': 'Used algorithms',
        'Command Line': 'Used command line',
        'Computer Science': 'Used computer science',
        'Functional Programming': 'Used functional programming',
        'Git': 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
        'GitHub': 'Used GitHub',
        'NumPy': 'Used NumPy',
        'PyPi': 'Used PyPi',
        'Python': 'Used Python',
        'Version Control': 'Used version control',
        'Visual Studio Code': 'Used VS Code'
    },
    type: 'library',
    host: 'PyPi',
    image: '/images/projects/regressions/main.png',
    bigImage: {
        url: '/images/projects/regressions/image1.png', 
        header: 'Cubic Regressions Research', 
        description: 'An outline for calculating cubic regressions by using linear systems with matrices'
    },
    secondBigImage: {
        url: '/images/projects/regressions/image2.png', 
        header: 'Matrix Determinant Research', 
        description: 'An outline for calculating the determinant of any matrix by using Laplace expansions'
    },
    thirdBigImage: {
        url: '/images/projects/regressions/image3.png', 
        header: 'Exponential Linearization Research', 
        description: 'An outline for linearizing an exponential equation by using logarithms'
    },
    code: {
        snippet: regressionsFirstSnippet, 
        language: 'python',
        header: 'Exponential Model', 
        description: 'Algorithm for calculating the exponential regression model of a data set by using linearization and matrix methods'
    },
    secondCode: {
        snippet: regressionsSecondSnippet, 
        language: 'python',
        header: 'Matrix Determinant', 
        description: 'Algorithm for calculating the determinant of any square matrix, regardless of size; unfortunately, this algorithm has factorial time complexity, making it unsuitable for use in the actual models'
    },
    deployedLink: 'https://pypi.org/project/regressions/',
    repositoryLink: 'https://github.com/jtreeves/regressions_library',
    date: 'January 2021'
}

export default regressions