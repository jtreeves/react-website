import Button from './Button'

function TumblrResourceCard(props) {    
    return (
        <div 
            className="resource-blog-card"
        >
            <div 
                className="resource-blog-card-body"
            >
                <h4>
                    <a 
                        href={props.link} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        {props.title}
                    </a>
                </h4>

                <div 
                    dangerouslySetInnerHTML={{
                        __html: props.description
                    }} 
                />
            </div>

            <div 
                className="resource-blog-card-footer"
            >
                <div 
                    className="resource-blog-card-button"
                >
                    <Button 
                        link={props.link}
                        target="_blank"
                        text="Read more"
                    />
                </div>

                <div 
                    className="resource-blog-card-date"
                >
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default TumblrResourceCard