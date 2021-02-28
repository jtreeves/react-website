import PageOpener from '../sections/PageOpener'
import Mail from '../contents/Mail'

function Contact() {
    return (
        <div>
            <PageOpener 
                title="Contact"
                description="Get in touch with me to collaborate or just to chat about movies by using this form"
            />
            
            <div class="overcoming-header">
                <main>
                    <Mail />
                </main>
            </div>

            <hr />
        </div>
    )
}

export default Contact