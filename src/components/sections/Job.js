import List from './List'

function Job(props) {
    return (
        <div>
            <h3>{props.company}</h3>

            <p>{props.position}</p>
            <p>{props.date}</p>
            
            <List 
                items={props.items}
            />
        </div>
    )
}

export default Job