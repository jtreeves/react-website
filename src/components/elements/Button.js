function Button(props) {
    return (
        <a 
            href={props.link} 
            target="_blank" 
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