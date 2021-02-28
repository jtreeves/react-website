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
                    <Testimonial 
                        header={testimonials.nicole.callout}
                        text={testimonials.nicole.quote}
                        source={testimonials.nicole.name}
                        company={testimonials.nicole.company}
                    />

                    <div className="projects-list">
                        <div className="one-column-of-three">
                            
                        </div>

                        <div className="one-column-of-three">
                            
                        </div>

                        <div className="one-column-of-three">
                            
                        </div>
                        
                    </div>
                </main>
            </div>
            
            <hr />
        </div>
    )
}

export default Testimonials