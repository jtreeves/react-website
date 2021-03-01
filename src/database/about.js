const textCards = {
    background: {
        header: "Background",
        body: "In college, I was a humanities major, and that taught me how to think and how to express myself coherently. As a journalist, I learned how to deliver on deadline and internalize specific style guidelines. As a marketer, I learned how to track website traffic and how to customize specific content for different platforms and clientele. As a tutor, I learned how to guide others and got experience with challenges that arise in one-on-one situations in which one party knows drastically more than the other. Additionally, I think I can explain anything to a ten-year-old, which I think means that I should be able to explain anything that I understand to anyone. Now, I hope to parlay all of those skills to become a programmer."
    },

    recent: {
        header: "Recent",
        body: "After completing an intensive, four-month program in software engineering from General Assembly, I'm excited to branch out into a new career in web development and programming. I hope to use the skills I've honed from working in math and editing to produce clean, performative code."
    },

    passions: {
        header: "Passions",
        body: "In my spare time, I like to solve calculus problems from one of the many math workbooks I keep in case of emergencies. Emergencies like not having enough practice sets to do. Ever since I was a young child, I have been trying to find the perfect outlet for my analytical orientation. In the past, that has included using a spreadsheet to organize my library chronologically. Now, it includes playing with SQL and building algorithms."
    }
}

const listCards = {
    books: {
        header: "Favorite Books",
        elements: [
            {
                title: "A Visit from the Goon Squad",
                creator: "Jennifer Egan"
            }, 
            {
                title: "A Wild Sheep Chase", 
                creator: "Haruki Murakami"
            }, 
            {
                title: "Endless Night", 
                creator: "Agatha Christie"
            }
        ]
    },

    movies: {
        header: "Favorite Movies",
        elements: [
            {
                title: "The Social Network",
                creator: "David Fincher"
            }, 
            {
                title: "O Brother, Where Art Thou?", 
                creator: "Joel and Ethan Coen"
            }, 
            {
                title: "Indiana Jones and the Raiders of the Lost Ark", 
                creator: "Steven Spielberg"
            }
        ]
    }
}

const quoteCards = {
    programming: {
        header: "Programming Quote",
        text: "The cheapest, fastest, and most reliable components of a computer system are those that aren't there.",
        source: "Gordon Bell"
    },

    movie: {
        header: "Movie Quote",
        text: "The time to make up your mind about people... is never.",
        source: "The Philadelphia Story"
    }
}

const imageCards = {
    working: {
        title: "Working",
        image: "/images/headshot.jpg"
    },

    books: {
        title: "Reading List",
        image: "/images/about/books.jpg"
    },

    hiking: {
        title: "Hiking",
        image: "/images/about/hike.jpg"
    }
}

export { textCards, listCards, quoteCards, imageCards }