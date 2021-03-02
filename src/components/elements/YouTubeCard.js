function YouTubeCard(props) {    
    return (
        <iframe 
            width="100%" 
            height="100%" 
            src={props.source}
            title={props.index}
            frameborder="0" 
            className="card-with-border"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
        />
    )
}

export default YouTubeCard