import Mail from '../contents/Mail'
import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
function Contact() {
    return (
        <div>
            <Navigation />
            
            <div class="overcoming-header">
                <main>
                    <SectionHeading heading="About" />   
            <Mail />
            </main>
            </div>
            <hr />
        </div>
    )
}

export default Contact