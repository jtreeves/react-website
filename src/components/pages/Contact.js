import PageOpener from '../sections/PageOpener'
import Mail from '../contents/Mail'

function Contact() {
    return (
        <div>
            <PageOpener 
                title="Contact"
                description="Thanks for visiting my site! If you'd like to work together or just want to drop me a line, feel free to use the below form."
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