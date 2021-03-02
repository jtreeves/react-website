function ImageCard(props) {    
    return (
        <div className="image-card">
            <div className="image-card-header">
                {props.title}
            </div>

            <div className="square">
                <img 
                    className="image-card-body square-content" 
                    src={props.image}
                    alt={props.title}
                />
            </div>
        </div>
    )
}

export default ImageCard