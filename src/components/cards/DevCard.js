import Button from './Button'

function DevCard(props) {    
    return (
        <div 
            className="code-blog-card"
        >
            <div className="code-blog-card-top">
                <a 
                    href={props.url} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <img 
                        src={props.image}
                        alt={props.title}
                        className="code-blog-card-img"
                    />
                </a>
            </div>

            <div className="code-blog-card-main">
                <div    
                    className="code-blog-card-body"
                >
                    <h4>
                        <a 
                            href={props.url} 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            {props.title}
                        </a>
                    </h4>

                    <p>{props.description}</p>
                </div>

                <div 
                    className="code-blog-card-footer"
                >
                    <div 
                        className="code-blog-card-button"
                    >
                        <Button 
                            link={props.url}
                            target="_blank"
                            text="Read more"
                        />
                    </div>

                    <div 
                        className="code-blog-card-date"
                    >
                        {props.date}
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default DevCard