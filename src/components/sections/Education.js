function Education(props) {
    return (
        <div>
            <h3>{props.school}</h3>

            <p>{props.degree}</p>
            <p>{props.specialization}</p>
            <p>{props.date}</p>
            <p>{props.courses}</p>
        </div>
    )
}

export default Education