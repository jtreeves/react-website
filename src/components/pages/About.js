import Introduction from '../sections/Introduction'

function About() {
    const name = 'About'
    const description = 'My name is Jackson Reeves, and I am a programmer.'
    
    return (
        <main>
            <Introduction 
                name={name}
                description={description}
            />
        </main>
    )
}

export default About