import { kaleidoscopeFirstSnippet, kaleidoscopeSecondSnippet } from '../snippets'

const kaleidoscope = {
    name: 'Kaleidoscope',
    description: 'A budget app',
    summary: 'Kaleidoscope is an app for seeing how simple life changes can result in dramatic budget opportunities. It was made through the collaborative efforts of Alan Avery, Jackson Reeves, Jeremy Uriz, and Thomas Gilbert.',
    inspiration: '',
    features: [''],
    lessons: [''],
    stretches: [
        'Add more explanatory information to the Compare Locations pages to clarify to the user just what this information means for them and their budgetary concerns',
        'Deploy an alternate version of the app that does not use the Numbeo API',
        'Further customize the charts for more readability and to make them even easier for users to understand',
        'Add additional featuers, like expense tracking',
        'While our app is designed for desktop use and not mobile use, we could make its design more responsive (it already is responsive, but it is not as mobile friendly as the user might want); alternatively, we could create a separate mobile version of the app',
        'While our app is designed for personal use and not social networking, we could build out the profile section to let users upload a profile image and about text',
        'Include more tests and a seeder file for development purposes',
        'Create a separate organization page on GitHub to host the repositories, instead of having them hosted by a specific team member'
    ],
    userStories: [
        'As a potential user, I want to sign up for Kaleidoscope, so I can use the service',
        'As a user, I want the ability to log in, so I can securely access my data',
        'As a user, I want to log out of the application, so I can keep my information secure',
        'As a new user, I want to enter my financial data, so I can effectively budget my income',
        'As a user, I want to see my monthly expenses, so I can track how my money is spent',
        'As a user, I want to see how my spending in a category impacts my budget, so I can make informed decisions about managing my expenses',
        'As a user, I want to see and modify expense details, so I can get an accurate view of my budget',
        'As a user, I want to see a sum of sub-categories, so I can see how much I am spending on each sub-category',
        'As a user, I want to easily navigate the application, so I can easily use it',
        'As a user, I want to see my name displayed when I am logged in, so I can know I am logged in',
        'As a user, I want to see the difference between my income and expenses, so I can either do nothing or make adjustments based on data',
        'As a user, I want to see how my budget compares to my goal, so I can see where I stand financially in relation to my goal'
    ],
    skills: {
        'Agile Development': 'used',
        'APIs': 'used',
        'Authentication': 'used',
        'Behavior-Driven Development': 'Used',
        'Chai': 'used',
        'Command Line': 'used',
        'CRUD Pattern': 'used',
        'Design Patterns': 'used',
        'Error Handling': 'used',
        'Express': 'used', 
        'Git': 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
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
        'Responsive Design': 'used',
        'REST Pattern': 'used',
        'Sass': 'used',
        'Test-Driven Development': 'used',
        'User Experience Design': 'used',
        'Version Control': 'used',
        'Visual Studio Code': 'used',
        'Wireframing': 'used'
    },
    type: 'app',
    host: 'Heroku',
    image: '/images/projects/kaleidoscope/main.png',
    bigImage: {
        url: '/images/projects/kaleidoscope/main.png', 
        header: 'Header', 
        description: 'Description'
    },
    secondBigImage: {
        url: '', 
        header: '', 
        description: ''
    },
    thirdBigImage: {
        url: '', 
        header: '', 
        description: ''
    },
    code: {
        snippet: kaleidoscopeFirstSnippet, 
        language: 'javascript',
        header: 'Header', 
        description: 'Description'
    },
    secondCode: {
        snippet: kaleidoscopeSecondSnippet, 
        language: 'javascript',
        header: 'Header', 
        description: 'Description'
    },
    deployedLink: 'https://kaleidoscope-budget.herokuapp.com',
    repositoryLink: 'https://github.com/jtreeves/budget-frontend',
    date: 'December 2020'
}

export default kaleidoscope