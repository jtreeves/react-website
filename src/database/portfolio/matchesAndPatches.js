import { matchesAndPatchesFirstSnippet, matchesAndPatchesSecondSnippet } from '../snippets'

const matchesAndPatches = {
    name: 'Matches and Patches',
    description: 'A board game',
    summary: `The goal is to 'match' your tiles with existing tiles already on the board, and thus capture different 'patches' (aka, cells) on the board. In essence, it's Uno crossed with Dominoes, but played on a Checkers board.`,
    inspiration: 'I wanted to create my own game from scratch involving features of other games that I loved. I drew inspiration from Dominoes, Uno, Checkers, Chess, and Go.',
    features: [
        'Introductory page',
        'Game board',
        'Feedback console'
    ],
    stretches: [
        'Provide an option to choose between a 4x4 board or an 8x8 board',
        'Provide clearer feedback to the user',
        'Make the automated opponent more intelligent',
        'Add ranked means of determining which player to benefit from a match when both match a common piece in the same move'
    ],
    userStories: [
        'As a potential user, I want to be able to read introductory text, so I can understand the rules of the game',
        'As a user, I want to see the effects of my moves after I make them, so I know I did not forget to click a button',
        'As a user, I want to receive feedback from the game about my current status, so I can keep track of my progress in the game'
    ],
    skills: {
        'Command Line': 'used',
        'CSS': 'used',
        'Error Handling': 'used',
        'Git': 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
        'GitHub': 'used',
        'HTML': 'used', 
        'JavaScript': 'used',
        'Object-Oriented Programming': 'used',
        'User Experience Design': 'used',
        'Visual Studio Code': 'used',
        'Wireframing': 'used'
    },
    type: 'app',
    host: 'GitHub',
    image: '/images/projects/matchesAndPatches/main.png',
    bigImage: {
        url: '/images/projects/matchesAndPatches/image1.png', 
        header: 'Board', 
        description: 'An initial wireframe of how the board could appear to the user towards the middle of the game'
    },
    secondBigImage: {
        url: '/images/projects/matchesAndPatches/image2.png', 
        header: 'Winning Move', 
        description: 'An initial wireframe of how the board could look after one player has made a winning move'
    },
    thirdBigImage: {
        url: '/images/projects/matchesAndPatches/image3.png', 
        header: 'Green Four of Triangles', 
        description: 'An initial design for how specific tiles could look; in this case, a green triangle with a four on it'
    },
    code: {
        snippet: matchesAndPatchesFirstSnippet, 
        language: 'javascript',
        header: 'Checking for Matches', 
        description: `At the end of each round, the game needs to check to see if either of the newly played tiles match with any of the tiles currently on the board. This function checks the user's recently played tile for matches. It starts by looking at the patch on which the tile was played (userPatch), looks at the tile object that was played (userTile), and determines which 4 tiles on the board need to be investigated (top, bottom, left, and right). It does this by looking at the row and column value pairs in each of the patches' objects. It then needs to determine if there was a match between any of those 4 tiles. They could match on color, number, shape, or any combination of those 3. Since a match could result in capturing multiple patches at once (e.g., the tile could match with the tile above it and to the right of it, and thus capture both of them), these features needed to be checked with separate if statements, as opposed to a series of if ... else if statements.`
    },
    secondCode: {
        snippet: matchesAndPatchesSecondSnippet, 
        language: 'javascript',
        header: 'Computer Moves', 
        description: `For the computer to move during a round, it must randomly select 1 of the 4 tiles it currently has. It can recognize this because said tile's status will be set to 'opponent.'`
    },
    deployedLink: 'https://jtreeves.github.io',
    repositoryLink: 'https://github.com/jtreeves/matches-and-patches',
    date: 'October 2020'
}

export default matchesAndPatches