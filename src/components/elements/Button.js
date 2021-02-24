function Button(props) {
    return (
        <a 
            href={props.link} 
            target={props.target}
            rel="noreferrer"
            className="blue-button"
        >
            <div>
                {props.text}
            </div>
        </a>
    )
}

export default Button