import Introduction from '../sections/Introduction'
import Mail from '../contents/Mail'

function Contact() {
    return (
        <div>
            <Introduction 
                name="Contact"
                description="Email me directly."
            />
            <Mail />
        </div>
    )
}

export default Contact