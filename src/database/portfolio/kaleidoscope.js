import { kaleidoscopeFirstSnippet, kaleidoscopeSecondSnippet } from '../snippets'

const kaleidoscope = {
    name: 'Kaleidoscope',

    description: 'A budget app',

    summary: 'Kaleidoscope is an app for seeing how simple life changes can result in dramatic budget opportunities. It was made through the collaborative efforts of Alan Avery, Jackson Reeves, Jeremy Uriz, and Thomas Gilbert.',

    inspiration: 'We knew that we wanted to produce a budgeting app, but we were initially unsure of how to differentiate it from other apps in the market. We decided to focus on the big picture. Unlike other apps, which emphasize your day-to-day budget concerns, our app emphasizes how basic changes to your budget plan can result in dramatic changes overall. Instead of having the user only build one budget that they update regularly, we gave the user the option to build out multiple budgets and compare them. We also included the ability to compare your budget to different locations. Some places are more expensive to live than others, as noted by their different price indexes. We wanted to allow the user to specifically see how those price differences would affect their budget. For example, your expenses would go up if you moved from Atlanta to Los Angeles, and our app allows you to see just by how much. In order to provide the user with that functionality, we implemented the Numbeo API.',

    features: [
        'Forms for signing up and logging in users',
        'Forms for creating budgets and adding elements to budgets',
        'Views for a homepage and about page',
        'Views for overview pages for separate budgets and category pages for separate sections within a specific budget',
        'Views for comparing all budgets and comparing how one budget would be affected if the user moved to a different location'
    ],

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
        'Agile Development': 'Adapted new features and abandoned old ones to meet evolving demands and produce the best product for the user',
        'APIs': 'Provided a graphical summary to help users compare their budgets across different locations by using the Numbeo API',
        'Authentication': 'Used Passport to limit information to only logged-in users',
        'Behavior-Driven Development': 'Fostered constant contact between design, user experience, and programming teams to ensure everyone on the project was always on the same page',
        'Chai': `Implemented tests using 'expect' and other functions from Chai's library`,
        'Command Line': 'Interacted with local and remote file structures via the terminal',
        'CRUD Pattern': 'Enabled users to create new budgets, view existing budgets, update existing budgets, and delete existing budgets to better help them navigate their finances',
        'Design Patterns': 'Used CRUD, MVC, and REST patterns to easily navigate routes',
        'Error Handling': 'Ensured users received feedback in the form of alerts in the event that an error occurred',
        'Express': `Interacted with the app's Mongo database by using Express for the app's backend repository`, 
        'Git': `Avoided any merge conflicts between separate members' branches by using the 'pull', 'merge', and 'switch' commands judiciously`,
        'GitHub': `Stored the backend and frontend repositories associated with the app on one member's GitHub account, while providing access to other teammates`,
        'Heroku': 'Deployed both the frontend and backend repositories for live access via Heroku',
        'Information Architecture': 'Implemented an entity relationship diagram to organize schema for Mongo database and help resolve decisions about embedding versus referencing',
        'JavaScript': 'Used async/await functions to handle calls to the database and API', 
        'Mocha': `Relied upon Mocha's commands to run all tests at once and quickly determine whether or not any tests had failed`,
        'Mongo Atlas': 'Stored database for deployed version of app using Mongo Atlas',
        'MongoDB': `Created non-relational database by using MongoDB`,
        'Mongoose': `Enforced schema for database by using Mongoose`,
        'MVC Pattern': 'Facilitated access to database by using models, views, and controllers',
        'Node': 'Used React for the frontend repository and Express for the backend repository',
        'NPM': 'Acquired dependencies by using the modules provided by NPM',
        'Object-Oriented Programming': 'Used inheritance to enforce a hierarchy of components',
        'React': 'Managed the flow of state and props between components behind the scenes thanks to React', 
        'Responsive Design': 'Ensured app worked in a variety of browser dimensions',
        'REST Pattern': 'Handled requests and responses with HTTP methods',
        'Sass': 'Avoided complicated CSS code by using Sass',
        'Test-Driven Development': 'Built tests prior to building functions for update and delete route actions',
        'User Experience Design': 'Relied on user stories to ensure finished project aligned with initial goals, and updated design to optimize user experience',
        'Version Control': 'Relied on various branches across different team members to manage different versions of the app at all times',
        'Visual Studio Code': 'Gained shortcuts for writing code by using Emmet extensions',
        'Wireframing': 'Designed app before building it by using Adobe XD'
    },

    type: 'app',

    host: 'Heroku',

    image: '/images/projects/kaleidoscope/main.png',

    bigImage: {
        url: '/images/projects/kaleidoscope/image1.png', 
        header: 'ERD', 
        description: 'We planned for our database to involve different schemas for each budget category that would all feed into a larger collection for each individual budget, which would in turn feed into the user collection'
    },

    secondBigImage: {
        url: '/images/projects/kaleidoscope/image2.png', 
        header: 'Wireframe', 
        description: 'We designed our initial mock-ups for the site using Adobe XD'
    },

    thirdBigImage: {
        url: '/images/projects/kaleidoscope/image3.png', 
        header: 'Visual Inspiration', 
        description: 'We drew inspiration for our graphs and other visuals from various outlets online'
    },

    code: {
        snippet: kaleidoscopeFirstSnippet, 
        language: 'javascript',
        header: 'Tests for New Users', 
        description: 'Tests using Mocha and Chai confirm that new users get stored in the database, receive hashed passwords before being stored, and obtain a new date field upon being added to the database'
    },

    secondCode: {
        snippet: kaleidoscopeSecondSnippet, 
        language: 'javascript',
        header: 'Flexible Schemas', 
        description: 'Users can input fields with whatever names they choose thanks to flexible schemas'
    },

    deployedLink: 'https://kaleidoscope-budget.herokuapp.com',

    repositoryLink: 'https://github.com/jtreeves/budget-frontend',
    
    date: 'December 2020'
}

export default kaleidoscope