import Button from './Button'

function MediumCard(props) {    
    return (
        <div 
            className="blog-card"
        >
            <div className="blog-card-side">
                <a 
                    href={props.link} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <img 
                        src={props.image}
                        alt={props.title}
                        className="blog-card-img"
                    />
                </a>
            </div>

            <div className="blog-card-main">
                <div className="blog-card-body">
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
                            __html: props.body
                        }} 
                    />
                </div>

                <div className="blog-card-footer">
                    <div 
                        className="blog-card-button"
                    >
                        <Button 
                            link={props.link}
                            target="_blank"
                            text="Read more"
                        />
                    </div>

                    <div 
                        className="blog-card-date"
                    >
                        {props.date}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediumCard