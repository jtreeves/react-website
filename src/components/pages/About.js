import PageOpener from '../sections/PageOpener'
import TextCard from '../elements/TextCard'
import ImageCard from '../elements/ImageCard'
import ListCard from '../elements/ListCard'
import QuoteCard from '../elements/QuoteCard'
import testimonials from '../../database/testimonials'
import TestimonialsTeaser from '../elements/TestimonialsTeaser'
import { textCards, listCards, quoteCards, imageCards } from '../../database/about'

import '../../style/about.css'

function About() {
    const workingImage = <ImageCard 
        title={imageCards.working.title}
        image={imageCards.working.image}
    />

    const recentText = <TextCard 
        header={textCards.recent.header}
        body={textCards.recent.body}
    />
        
    const programmingQuote = <QuoteCard 
        header={quoteCards.programming.header}
        text={quoteCards.programming.text}
        source={quoteCards.programming.source}
    />

    const backgroundText = <TextCard 
        header={textCards.background.header}
        body={textCards.background.body}
    />

    const booksImage = <ImageCard 
        title={imageCards.books.title}
        image={imageCards.books.image}
    />

    const passionsText = <TextCard 
        header={textCards.passions.header}
        body={textCards.passions.body}
    />

    const simoneTestimonial = <TestimonialsTeaser 
        header={testimonials.simone.callout}
        text={testimonials.simone.quote}
        source={testimonials.simone.name}
        company={testimonials.simone.company}
    />

    const movieQuote = <QuoteCard 
        header={quoteCards.movie.header}
        text={quoteCards.movie.text}
        source={quoteCards.movie.source}
    />

    const booksList = <ListCard 
        header={listCards.books.header}
        elements={listCards.books.elements}
    />

    const moviesList = <ListCard 
        header={listCards.movies.header}
        elements={listCards.movies.elements}
    />

    const hikingImage = <ImageCard 
        title={imageCards.hiking.title}
        image={imageCards.hiking.image}
    />

    return (
        <div>
            <PageOpener 
                title="About"
                description="Learn more about me, including my background, my passions, and my favorite books"
            />
            
            <div class="overcoming-header">
                <main>
                    <div 
                        className="three-columns" 
                        id="about-three"
                    >
                        <div className="single-column">
                            {workingImage}
                            {backgroundText}
                            {movieQuote}
                        </div>

                        <div className="single-column">
                            {recentText}
                            {booksImage}
                            {simoneTestimonial}
                            {booksList}
                        </div>
                        
                        <div className="single-column">
                            {programmingQuote}
                            {passionsText}
                            {moviesList}
                            {hikingImage}
                        </div>
                    </div>

                    <div 
                        className="two-columns"
                        id="about-two"
                    >
                        <div className="single-column">
                            {workingImage}
                            {backgroundText}
                            {simoneTestimonial}
                            {moviesList}
                            {hikingImage}
                        </div>

                        <div className="single-column">
                            {recentText}
                            {programmingQuote}
                            {booksImage}
                            {passionsText}
                            {booksList}
                            {movieQuote}
                        </div>
                    </div>

                    <div 
                        className="single-column"
                        id="about-one"
                    >
                        {recentText}
                        {workingImage}
                        {backgroundText}
                        {programmingQuote}
                        {booksImage}
                        {passionsText}
                        {simoneTestimonial}
                        {hikingImage}
                        {movieQuote}
                        {booksList}
                        {moviesList}
                    </div>
                </main>
            </div>
            
            <hr />
        </div>
    )
}

export default About