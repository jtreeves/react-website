function TumblrMemeCard(props) {    
    return (
        <div 
            className="meme-card"
        >
            <a 
                href={props.link} 
                target="_blank" 
                rel="noreferrer"
            >
                <img 
                    src={props.image}
                    alt="meme"
                />
            </a>
        </div>
    )
}

export default TumblrMemeCard