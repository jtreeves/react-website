import Introduction from '../sections/Introduction'

function Resume() {
    const name = 'Resume'
    const description = 'Here is my current resume.'

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />
        </div>
    )
}

export default Resume