function ImageCard(props) {    
    return (
        <div className="image-card">
            <div className="image-card-header">
                {props.title}
            </div>
            
            <img 
                className="image-card-body" 
                src={props.image}
                alt={props.title}
            />
        </div>
    )
}

export default ImageCard