function Square(props) {
    return (
        <div className="square square-highlight">
                <a 
                    href={props.link} 
                    target="_blank" 
                    rel="noreferrer"
                >
            <div className="square-content square-main">
                {props.main}
            </div>

            <div className="square-content square-overlay">
                    {props.overlay}
            </div>
                </a>
        </div>            
    )
}

export default Square