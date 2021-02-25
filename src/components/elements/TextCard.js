function TextCard(props) {    
    return (
        <div className="text-card">
            <div className="text-card-header">
                {props.header}
            </div>

            <div className="text-card-body">
                {props.body}
            </div>
        </div>
    )
}

export default TextCard