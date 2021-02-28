import { tiresiasFirstSnippet, tiresiasSecondSnippet } from '../snippets'

const tiresias = {
    name: 'Tiresias',
    description: 'A statistics app',
    summary: 'This app allows users to upload data sets, and then get different regression models that fit those data. It currently provides the following models: linear, quadratic, cubic, hyperbolic, exponential, and logarithmic.',
    inspiration: 'I wanted to create a way for users to see multiple regression models at once. While other sites provide users with a way to view an individual regression model at a time (e.g., a linear model), I wanted this site to provide multiple models at once.',
    features: [
        'Protected routes',
        'Form for submitting a data set',
        'Display window for viewing results'
    ],
    stretches: [
        'Use an API to render results in a graphical format',
        'Allow users to save results',
        'Allow users to upload information in a CSV file format'
    ],
    userStories: [
        'As a potential user, I want to know about its appeal, so I have a reason to sign up',
        'As a potential user, I want to see specific examples of how it can be used by customers, so I know how I can implement it',
        'As a potential user, I want to be able to sign up with an email and password, so I can create an account',
        'As a user, I want to be able to log in to my account with my email and password, so I can use the site',
        'As a user, I want to be able to submit data sets, so I can get them analyzed',
        'As a user, I want to be able to submit my data sets in a CSV format, so the process only involves one step and uses a format in which I probably already have the data',
        'As a user, I want to be able to see regression models that fit the data I submitted, so I can better understand my original data',
        'As a user, I want to get the analysis in an easily digestible format, so I can understand it without needing a background in math',
        'As a user, I want to be able to access previously uploaded data sets and their analyses, so I do not need to repeatedly re-upload the same data every time I want to analyze it',
        'As a user, I want to be able to favorite specific models of my data, so I do not need to look at unideal formats',
        'As a user, I want to be able to add notes to my models and view them at a future date, so I can use the site to keep track of my thoughts on my initial data and the analysis produced by the site',
        'As a user, I want to know that no one else can access my data, so I know it is secure'
    ],
    skills: {
        'APIs': 'used',
        'Authentication': 'Used',
        'Bootstrap': 'used',
        'Chai': 'used',
        'Command Line': 'used',
        'Computer Science': 'used',
        'Design Patterns': 'used',
        'Error Handling': 'used',
        'Express': 'used', 
        'Git': 'Lorem Ipsum dolor sit amet',
        'GitHub': 'used',
        'Heroku': 'used',
        'Information Architecture': 'used',
        'JavaScript': 'used', 
        'Mocha': 'used',
        'Mongo Atlas': 'used',
        'MongoDB': 'used',
        'Mongoose': 'used',
        'MVC Pattern': 'used',
        'Node': 'used',
        'NPM': 'used',
        'Object-Oriented Programming': 'used',
        'React': 'used',
        'User Experience Design': 'used',
        'Version Control': 'used',
        'Visual Studio Code': 'used',
        'Wireframing': 'used'
    },
    type: 'app',
    host: 'Heroku',
    image: '/images/projects/tiresias/main.png',
    bigImage: {
        url: '/images/projects/tiresias/image1.png', 
        header: 'Display Results', 
        description: 'Wireframe of how final results could appear to the user'
    },
    secondBigImage: {
        url: '/images/projects/tiresias/image2.png', 
        header: 'ERD', 
        description: 'Diagram of the database structure for the app'
    },
    thirdBigImage: {
        url: '/images/projects/tiresias/image3.png', 
        header: 'Add Data Set', 
        description: 'Wireframe of how the user could upload data for analysis'
    },
    code: {
        snippet: tiresiasFirstSnippet, 
        language: 'javascript',
        header: 'Post Route', 
        description: 'Store a new data set of regression models in the database'
    },
    secondCode: {
        snippet: tiresiasSecondSnippet, 
        language: 'javascript',
        header: 'Add New Data Set', 
        description: 'Before clicking the submit button, see a list of input options; after clicking the submit button, see a list of results'
    },
    deployedLink: 'https://tiresias-predictions.herokuapp.com',
    repositoryLink: 'https://github.com/jtreeves/predictions-frontend',
    date: 'January 2021'
}

export default tiresias