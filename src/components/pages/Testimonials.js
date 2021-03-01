import PageOpener from '../sections/PageOpener'
import Testimonial from '../elements/Testimonial'
import testimonials from '../../database/testimonials'

function Testimonials() {
    return (
        <div>
            <PageOpener 
                title="Testimonials"
                description="Hear what others have to say about working with me and what I can bring to your team"
            />
            
            <div class="overcoming-header">
                <main>
                    <div className="two-columns">
                        <div className="single-column">
                            <Testimonial 
                                header={testimonials.nicole.callout}
                                text={testimonials.nicole.quote}
                                source={testimonials.nicole.name}
                                company={testimonials.nicole.company}
                            />
                        </div>

                        <div className="single-column">
                            <Testimonial 
                                header={testimonials.simone.callout}
                                text={testimonials.simone.quote}
                                source={testimonials.simone.name}
                                company={testimonials.simone.company}
                            />
                        </div>

                        <div className="single-column">
                            
                        </div>
                    </div>
                </main>
            </div>
            
            <hr />
        </div>
    )
}

export default Testimonials