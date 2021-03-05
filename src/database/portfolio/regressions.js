import { regressionsFirstSnippet, regressionsSecondSnippet } from '../snippets'

const regressions = {
    name: 'Regressions',

    description: 'An algorithm library',

    summary: `A collection of Python algorithms for fitting data to different functional models by using matrices. This library is publically available via PyPI's database of libraries. It contains all the code for determining regression equations, as well as the code for evaluating said regressions and presenting their results in a raw format.`,

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
        'Algorithms': 'Wrote separate algorithms for each type of regression model',
        'Command Line': 'Uploaded library to PyPI via the command line',
        'Computer Science': 'Relied on fundamental skills from computer science to build library',
        'Functional Programming': 'Used functions as the primary data type in all files, and returned functions as certain results',
        'Git': 'Used Git to store code base of library on GitHub',
        'GitHub': 'Stored code for library on GitHub',
        'NumPy': 'Used NumPy to avoid defining more mathematical functions than necessary and occasionally as an alternative to personally-built, time-inefficient versions',
        'PyPI': 'Made library available for public use by uploading it to PyPI',
        'Python': `Relied on Python's strength when it comes to math and statistics to build algorithms designed for that particular academic field`,
        'Version Control': 'Managed release versions of the library',
        'Visual Studio Code': 'Used Visual Studio Code to write the library'
    },

    type: 'library',

    host: 'PyPI',

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