import Introduction from '../sections/Introduction'

function About() {
    const name = 'About'
    const description = 'My name is Jackson Reeves, and I am a programmer.'
    
    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />
        </div>
    )
}

export default About