import PageOpener from '../sections/PageOpener'
import TestimonialCard from '../cards/TestimonialCard'
import testimonials from '../../database/testimonials'

import '../../style/testimonials.css'

function Testimonials() {
    const jeremy = <TestimonialCard 
        header={testimonials.jeremy.callout}
        text={testimonials.jeremy.quote}
        source={testimonials.jeremy.name}
        company={testimonials.jeremy.company}
    />

    const nicole = <TestimonialCard 
        header={testimonials.nicole.callout}
        text={testimonials.nicole.quote}
        source={testimonials.nicole.name}
        company={testimonials.nicole.company}
    />

    const simone = <TestimonialCard 
        header={testimonials.simone.callout}
        text={testimonials.simone.quote}
        source={testimonials.simone.name}
        company={testimonials.simone.company}
    />

    const thomas = <TestimonialCard 
        header={testimonials.thomas.callout}
        text={testimonials.thomas.quote}
        source={testimonials.thomas.name}
        company={testimonials.thomas.company}
    />
    
    const alan = <TestimonialCard 
        header={testimonials.alan.callout}
        text={testimonials.alan.quote}
        source={testimonials.alan.name}
        company={testimonials.alan.company}
    />
    
    const mike = <TestimonialCard 
        header={testimonials.mike.callout}
        text={testimonials.mike.quote}
        source={testimonials.mike.name}
        company={testimonials.mike.company}
    />

    return (
        <div>
            <PageOpener 
                title="Testimonials"
                description="Hear what others have to say about working with me and what I can bring to your team"
            />
            
            <div class="overcoming-header">
                <main>
                    <div 
                        className="three-columns"
                        id="testimonials-three"
                    >
                        <div className="single-column">
                            {jeremy}
                            {nicole}
                        </div>

                        <div className="single-column">
                            {mike}
                            {alan}
                        </div>
                        
                        <div className="single-column">
                            {thomas}
                            {simone}
                        </div>
                    </div>
                    
                    <div 
                        className="two-columns"
                        id="testimonials-two"
                    >
                        <div className="single-column">
                            {jeremy}
                            {nicole}
                            {alan}
                        </div>

                        <div className="single-column">
                            {thomas}
                            {mike}
                            {simone}
                        </div>
                    </div>
                    
                    <div 
                        className="single-column"
                        id="testimonials-one"
                    >
                        {jeremy}
                        {thomas}
                        {alan}
                        {mike}
                        {nicole}
                        {simone}
                    </div>
                </main>
            </div>
            
            <hr />
        </div>
    )
}

export default Testimonials