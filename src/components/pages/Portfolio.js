import Introduction from '../sections/Introduction'

function Portfolio() {
    const name = 'Portfolio'
    const description = 'Here are some of my recent projects.'

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />
        </div>
    )
}

export default Portfolio