import PageOpener from '../sections/PageOpener'
import TextCard from '../elements/TextCard'
import ImageCard from '../elements/ImageCard'
import ListCard from '../elements/ListCard'
import QuoteCard from '../elements/QuoteCard'
import testimonials from '../../database/testimonials'
import TestimonialsTeaser from '../elements/TestimonialsTeaser'
import { textCards, listCards, quoteCards, imageCards } from '../../database/about'

function About() {
    return (
        <div>
            <PageOpener 
                title="About"
                description="Learn more about me, including my background, my passions, and my favorite books"
            />
            
            <div class="overcoming-header">
                <main>
                    <div className="three-columns">
                        <div className="single-column">
                            <ImageCard 
                                title={imageCards.working.title}
                                image={imageCards.working.image}
                            />

                            <TextCard 
                                header={textCards.background.header}
                                body={textCards.background.body}
                            />

                            <QuoteCard 
                                header={quoteCards.movie.header}
                                text={quoteCards.movie.text}
                                source={quoteCards.movie.source}
                            />
                        </div>

                        <div className="single-column">
                            <TextCard 
                                header={textCards.recent.header}
                                body={textCards.recent.body}
                            />

                            <ImageCard 
                                title={imageCards.books.title}
                                image={imageCards.books.image}
                            />

                            <TestimonialsTeaser 
                                header={testimonials.simone.callout}
                                text={testimonials.simone.quote}
                                source={testimonials.simone.name}
                                company={testimonials.simone.company}
                            />
                            
                            <ListCard 
                                header={listCards.books.header}
                                elements={listCards.books.elements}
                            />
                        </div>

                        <div className="single-column">
                            <QuoteCard 
                                header={quoteCards.programming.header}
                                text={quoteCards.programming.text}
                                source={quoteCards.programming.source}
                            />

                            <TextCard 
                                header={textCards.passions.header}
                                body={textCards.passions.body}
                            />

                            <ListCard 
                                header={listCards.movies.header}
                                elements={listCards.movies.elements}
                            />

                            <ImageCard 
                                title={imageCards.hiking.title}
                                image={imageCards.hiking.image}
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