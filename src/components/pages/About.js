import PageOpener from '../sections/PageOpener'
import TextCard from '../elements/TextCard'
import ImageCard from '../elements/ImageCard'
import FavoritesCard from '../elements/FavoritesCard'
import QuoteCard from '../elements/QuoteCard'
import testimonials from '../../database/testimonials'
import TestimonialsTeaser from '../elements/TestimonialsTeaser'

function About() {
    return (
        <div>
            <PageOpener 
                title="About"
                description="Learn more about me, including my background, my passions, and my favorite books"
            />
            
            <div class="overcoming-header">
                <main>
                    <div className="projects-list">
                        <div className="one-column-of-three">
                            <ImageCard 
                                title="Working"
                                image="/images/headshot.jpg"
                            />

                            <TextCard 
                                header="Background"
                                body="In college, I was a humanities major, and that taught me how to think and how to express myself coherently. As a journalist, I learned how to deliver on deadline and internalize specific style guidelines. As a marketer, I learned how to track website traffic and how to customize specific content for different platforms and clientele. As a tutor, I learned how to guide others and got experience with challenges that arise in one-on-one situations in which one party knows drastically more than the other. Additionally, I think I can explain anything to a ten-year-old, which I think means that I should be able to explain anything that I understand to anyone. Now, I hope to parlay all of those skills to become a programmer."
                            />

                            <QuoteCard 
                                header="Movie Quote"
                                text="The time to make up your mind about people... is never."
                                source="The Philadelphia Story"
                            />
                        </div>

                        <div className="one-column-of-three">
                            <TextCard 
                                header="Recent"
                                body="After completing an intensive, four-month program in software engineering from General Assembly, I'm excited to branch out into a new career in web development and programming. I hope to use the skills I've honed from working in math and editing to produce clean, performative code."
                            />

                            <ImageCard 
                                title="Reading List"
                                image="/images/books.jpg"
                            />

                            <TestimonialsTeaser 
                                header={testimonials.nicole.callout}
                                text={testimonials.nicole.quote}
                                source={testimonials.nicole.name}
                                company={testimonials.nicole.company}
                            />
                            
                            <FavoritesCard 
                                header="Favorite Books"
                                elements={[
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
                                ]}
                            />
                        </div>

                        <div className="one-column-of-three">
                            <QuoteCard 
                                header="Programming Quote"
                                text="The cheapest, fastest, and most reliable components of a computer system are those that aren't there."
                                source="Gordon Bell"
                            />

                            <TextCard 
                                header="Passions"
                                body="In my spare time, I like to solve calculus problems from one of the many math workbooks I keep in case of emergencies. Emergencies like not having enough practice sets to do. Ever since I was a young child, I have been trying to find the perfect outlet for my analytical orientation. In the past, that has included using a spreadsheet to organize my library chronologically. Now, it includes playing with SQL and building algorithms."
                            />

                            <FavoritesCard 
                                header="Favorite Movies"
                                elements={[
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
                                ]}
                            />

                            <ImageCard 
                                title="Hiking"
                                image="/images/hike.jpg"
                            />
                        </div>
                    </div>
                </main>
            </div>
            
            <hr />
        </div>
    )
}

export default About