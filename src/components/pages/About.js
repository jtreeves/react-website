import ImageCard from '../elements/ImageCard'
import QuoteCard from '../elements/QuoteCard'
import Navigation from '../sections/Navigation'
import PageOpener from '../sections/PageOpener'
import SectionHeading from '../sections/SectionHeading'

function About() {
    return (
        <div>
            <PageOpener 
                title="About"
                description="Thanks for visiting my site! Here's a little bit more info about me."
            />
            
            <div class="overcoming-header">
                <main>
                    <div className="projects-list">
                        <div className="one-column-of-three">
                        <ImageCard 
                            title="Photo"
                            image="/images/headshot.jpg"
                        />

                        <QuoteCard 
                            header="Quote"
                            text="The time to make up your mind about people... is never."
                            source="The Philadelphia Story"
                        />

                        </div>
                        


                        <p>
                            In college, I was a humanities major, and   that taught me how to think and how to express myself coherently. As a journalist, I learned how to deliver on deadline and internalize specific style guidelines. As a marketer, I learned how to track website traffic and how to customize specific content for different platforms and clientele. As a tutor, I learned how to guide others and got experience with challenges that arise in one-on-one situations in which one party knows drastically more than the other. Additionally, I think I can explain anything to a ten-year-old, which I think means that I should be able to explain anything that I understand to anyone. Now, I hope to parlay all of those skills to become a programmer.
                        </p>

                        <p>
                            A digital native living in the South, Jackson Reeves is a jack-of-all-trades with experience in the education, journalism, and digital media industries. He currently works as the director of Hyperion Academics. As a professional nerd, he teaches students algebra, geometry, and calculus; helps them improve their study skills; and coaches them to ace the entire battery of standardized tests, including the SAT and ACT. He previously served as the digital media producer at Atlanta magazine, one of the country's first city publications. There, he managed the magazine's social media endeavors and newsletter programs, updated the website with editorial content from the print edition each month, and wrote for the Daily Agenda and Covered Dish blogs.
                        </p>
                        
                        <p>
                            Prior to joining Atlanta, Reeves plugged away at various local and national newspapers and magazines and received a degree in media studies with minors in English and philosophy from Vassar College. The Sandy Springs native returned to his hometown in 2009 to escape the hassles of poststructuralist theory, immerse himself in Southern hospitality, and binge on pork belly. In his spare time, he enjoys reading the literature of Bret Easton Ellis and Anne Rivers Siddons, listening to Soundgarden and Sneaker Pimps, and watching anything written by Tina Fey. That, or getting outside and playing with his dog, Tucker. And he likes the Internet. A lot. If interested in reaching Reeves for freelance work, feel free to send him an email. His areas of expertise include education, social media, copyediting, and data analysis.
                        </p>
                    </div>
                </main>
            </div>
            
            <hr />
        </div>
    )
}

export default About