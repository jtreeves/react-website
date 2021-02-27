function DescriptionImageCard(props) { 
    return (
        <div className="description-image-card">
            <div className="description-image-card-header">
                {props.header}
            </div>

            <div className="description-image-card-top">
                <div className="square">
                    <img 
                        src={props.url}
                        alt={props.header}
                        className="square-content"
                    />
                </div>
            </div>

            <div className="description-image-card-main">
                {props.description}
            </div>
        </div>
    )
}

export default DescriptionImageCard