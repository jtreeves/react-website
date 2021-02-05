import Introduction from '../sections/Introduction'
import Mail from '../contents/Mail'

function Contact() {
    const name = 'Contact'
    const description = 'Email me directly.'

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />
            <Mail />
        </div>
    )
}

export default Contact