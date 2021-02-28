import { regressionzFirstSnippet, regressionzSecondSnippet } from '../snippets'

const regressionz = {
    name: 'RΣGRΣSSIONZ',
    description: 'An intermediary API',
    summary: 'This simple API allows non-Python coders to use a Python library of regression models. It serves as a pared-down yet user-friendly intermediary.',
    inspiration: 'I had a Python library of regression models and a JavaScript app for displaying data models, and I needed a way to link the two together.',
    features: [
        'Sign up form to get an API key',
        'Database to store API keys',
        'Routes for generating and getting regression models'
    ],
    stretches: [
        'Add page to explain the math behind the app',
        'Add page to explain how to use the API, along with the type of results to expect',
        'Clean up design to make it more enticing'
    ],
    userStories: [
        'As a potential user, I want to know about its appeal, so I have a reason to sign up',
        'As a potential user, I want to see specific examples of how it can be used by customers, so I know how I can implement it',
        'As a potential user, I want to understand the mathematical logic that it implements and how it differs from any competitors, so I can understand the logic',
        'As a potential user, I want to be able to sign up for an API key, so I can use it',
        'As a user, I want to be able to upload my data to their database by using my API key, so I can access it',
        'As a user, I want to be able to view my data stored in their database by using my API key, so I can access it',
        'As a user, I want to know that no one else can access my data, so I know it is secure',
        'As a user, I want to get extensive info from the API, so I know that it was worth signing up for',
        'As a user, I want to get the data in a raw format, so I can easily customize it to my needs'
    ],
    skills: {
        'APIs': 'Designed app to function as an API by providing keys to users',
        'Command Line': 'Used command line to interact with local and remote files',
        'Flask': 'Used Flask framework as a lighter alternative to Django',
        'Git': 'Used Git to send code to GitHub',
        'GitHub': 'Used GitHub to store code',
        'Heroku': 'Deployed site on Heroku',
        'PyPi': 'Accessed libraries from PyPi',
        'Python': 'Wrote code in Python to be able to use previously made Python library',
        'Postgres': 'Used Postgres to handle SQL database when deployed on Heroku',
        'SQL': 'Stored database via SQL',
        'Visual Studio Code': 'Used Visual Studio Code as an IDE',
        'Wireframing': 'Created wireframes to determine the design of the app'
    },
    type: 'app',
    host: 'Heroku',
    image: '/images/projects/regressionz/main.png',
    bigImage: {
        url: '/images/projects/regressionz/image1.png', 
        header: 'Math Explanation Wireframe', 
        description: 'A wireframe for a page on the site to explain the mathematical functionality to which the API gives the user access'
    },
    secondBigImage: {
        url: '/images/projects/regressionz/image2.png', 
        header: 'ERD', 
        description: 'A diagram of the SLQ database structure'
    },
    thirdBigImage: {
        url: '/images/projects/regressionz/image3.png', 
        header: 'Sign Up Wireframe', 
        description: 'A wireframe for a page on the site to sign up for an API key'
    },
    code: {
        snippet: regressionzFirstSnippet, 
        language: 'python',
        header: 'Routes for Models', 
        description: 'A route that either POSTs or GETs based on its input'
    },
    secondCode: {
        snippet: regressionzSecondSnippet, 
        language: 'python',
        header: 'Decorator for API Key', 
        description: 'A decorator to ensure only requests made with an API key will be processed'
    },
    deployedLink: 'https://regressionz.herokuapp.com/',
    repositoryLink: 'https://github.com/jtreeves/regressions_api',
    date: 'January 2021'
}

export default regressionz