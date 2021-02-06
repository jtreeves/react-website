import Introduction from '../sections/Introduction'
import Mail from '../contents/Mail'

function Contact() {
    const name = 'Contact'
    const description = 'Email me directly.'

    return (
        <main>
            <Introduction 
                name={name}
                description={description}
            />
            
            <Mail />
        </main>
    )
}

export default Contact