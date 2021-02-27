import { readThisNextFirstSnippet, readThisNextSecondSnippet } from '../snippets'

const readThisNext = {
    name: 'Read This Next',
    description: 'A reading app',
    summary: 'This app generates book recommendations based on your preferences, which it determines based on your previous activity.',
    inspiration: 'I wanted to create an app with a button that when pressed would present the reader with a single book to read next. I wanted to simplify the process of choosing a new book to read.',
    features: [
        'SQL database',
        'Protected routes',
        'Web interface',
        'Recommendation algorithm'
    ],
    stretches: [
        'Create a cleaner design',
        'Display the full text of books by rendering the HTML received from the API',
        'Allow users to rate books and mark them as read, instead of only allowing them to do one or the other at any given time'
    ],
    userStories: [
        'A user can use the app by visiting the site, creating an account, and logging into their account',
        'A user can rate random books from a database of more than 50,000 books on a scale from 1 to 5',
        'A user can receive random book recommendations based on how they rated previous books',
        'A user can pass on random book recommendations if they have no desire to have that particular book recommended to them again, or a user can add random book recommendations to their reading list if they want to read that book at a later point in time',
        'A user can view a list of all the books they have previously rated, and the user can view a list of all the books they have previously added to their reading list',
        'A user can change their rating of any book',
        'A user can remove a book from their reading list',
        'A user can mark books as read',
        'A user can view a list of all the books they have marked as read'
    ],
    skills: {
        'APIs': 'Used',
        'Authentication': 'used',
        'Bootstrap': 'used',
        'Command Line': 'used',
        'CRUD Pattern': 'used',
        'Error Handling': 'used',
        'Express': 'used', 
        'Git': 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        'GitHub': 'used',
        'Heroku': 'Used',
        'Information Architecture': 'used',
        'JavaScript': 'used', 
        'MVC Pattern': 'used',
        'Node': 'used',
        'NPM': 'used',
        'Object-Oriented Programming': 'used',
        'Postgres': 'used',
        'REST Pattern': 'used',
        'Sequelize': 'used',
        'SQL': 'used',
        'User Experience Design': 'used',
        'Visual Studio Code': 'used',
        'Wireframing': 'used'
    },
    type: 'app',
    host: 'Heroku',
    image: '/images/projects/readThisNext/main.png',
    bigImage: {
        url: '/images/projects/readThisNext/image1.png', 
        header: 'ERD', 
        description: 'Description of the relationships between various tables of the database'
    },
    secondBigImage: {
        url: '/images/projects/readThisNext/image2.png', 
        header: 'Rate Books', 
        description: 'Wireframe of page for rating individual books'
    },
    thirdBigImage: {
        url: '/images/projects/readThisNext/image3.png', 
        header: 'Home Page', 
        description: 'Wireframe of landing page to convince people to sign up for the app'
    },
    code: {
        snippet: readThisNextFirstSnippet, 
        language: 'javascript',
        header: 'Suggestion Route', 
        description: 'This code block involves five nested promises, including two database queries and three API calls, to provide the user with a random book recommendation based on the information they have previously provided to the app'
    },
    secondCode: {
        snippet: readThisNextSecondSnippet, 
        language: 'javascript',
        header: 'Exclude Duplicates', 
        description: 'This code block checks for books with nearly identical titles to exclude them from searches'
    },
    deployedLink: 'https://read-this-next.herokuapp.com',
    repositoryLink: 'https://github.com/jtreeves/read-this-next',
    date: 'November 2020'
}

export default readThisNext