import { learnMathFirstSnippet, learnMathSecondSnippet } from '../snippets'

const learnMath = {
    name: 'Learn Math',

    description: 'An online game',

    summary: 'Learn Math is a simple online game for testing your arithmetic skills. Questions cover addition, subtraction, multiplication, and division, with 1- to 4-digit numbers',

    inspiration: 'I wanted to learn the Vue framework, and I wanted to try my hand at building a game again, so I combined those two objectives and made this project. While I had used TypeScript for client projects before, I had never used it for a personal project, so I implemented it with this project.',

    features: [
        'Fully functional, playable game with win and lose conditions',
        'Unlimited question bank since questions generated dynamically instead of being accessed statically',
        'Score board in the header, so user can easily always view their score, strikes, and remaining time',
        'Feedback for all questions to inform users of correct answers before moving on to a new question',
        'Routing for separate pages to move beyond SPA basics',
        `Native storage for state management via Vue's Reactivity API`,
        'Test suites for every major file'
    ],

    stretches: [
        `More tests to increase code coverage, handle edge cases, and test UI's functionality, which may require implementing Cypress for integration tests`,
        'Improve styling for a more enjoyable user experience'
    ],

    userStories: [
        'As a potential user, I want to be able to read the instructions for the game, so I can know how to play it',
        'As a user, I want to be able to play the game, so I can see how good my math skills are',
        'As a user, I want to get feedback about each question, so I can know what the correct answer was',
        'As a user, I want to be able to see my status at any point, so I can know how many points I have and how much time I have left',
        'As a user, I want to be able to easily replay the game, so I do not need to manually refresh the app'
    ],

    skills: {
        'Command Line': 'Generate the project and interacted with local and remote repositories via the terminal',
        'CSS': 'Used scoped style tags to limit component styling',
        'Git': 'Implemented for version control',
        'GitHub': 'Stored repository, and made it searchable via tags',
        'HTML': 'Used template tags to add markup to SFCs',
        'Jest': 'Created more than 100 test cases to ensure proper functioning',
        'Netlify': 'Deployed remote version of site with a CI/CD setup', 
        'Node': 'Created project via Vue and its affiliated packages',
        'NPM': 'Acquired dependencies by using the modules provided by NPM',
        'Object-Oriented Programming': 'Used object binding to create reactive stores that could be accessed across the app and facilitate state management',
        'Test-Driven Development': 'Built tests in conjunction with building components to vet quality immediately',
        'TypeScript': 'Used dialect to enforce types across app',
        'User Experience Design': 'Ensured end result was designed for an optimal end user experience',
        'Visual Studio Code': 'Saw proper syntax highlighting for SFCs thanks to the Volar extension',
        'Vue': 'Used framework for a modern user experience with emphasis on events'
    },

    type: 'game',

    host: 'Netlify',

    image: '/images/projects/learnMath/main.png',

    bigImage: {
        url: '/images/projects/learnMath/image1.png', 
        header: 'Question', 
        description: 'Users see the question along with four answer choices'
    },

    secondBigImage: {
        url: '/images/projects/learnMath/image2.png', 
        header: 'Feedback', 
        description: 'After answering each question, users can see what the correct answer was and whether they chose correctly'
    },

    thirdBigImage: {
        url: '/images/projects/learnMath/image3.png', 
        header: 'Instructions', 
        description: 'Different articles explain different features of the game'
    },

    code: {
        snippet: learnMathFirstSnippet, 
        language: 'typescript',
        header: 'Score Store', 
        description: 'Store to simplify state management across app with accessor and mutators'
    },

    secondCode: {
        snippet: learnMathSecondSnippet, 
        language: 'typescript',
        header: 'Landing Pages Composable', 
        description: 'Custom composable to simplify navigation'
    },

    deployedLink: 'https://vue-learn-math.netlify.app',

    repositoryLink: 'https://github.com/jtreeves/vue-learn-math',
    
    date: 'March 2022'
}

export default learnMath