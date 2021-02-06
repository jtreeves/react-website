import List from '../elements/List'

function Education(props) {
    return (
        <div>
            <h3>{props.school}</h3>

            <p>{props.degree}</p>
            <p>{props.specialization}</p>
            <p>{props.date}</p>

            <List 
                items={props.courses}
            />
        </div>
    )
}

export default Education