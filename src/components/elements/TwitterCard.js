import Button from './Button'

function TwitterCard(props) {    
    return (
        <div 
            className="tweet-card"
        >
            <div className="tweet-card-body">
                <p>{props.text}</p>
            </div>

            <div 
                className="tweet-card-footer"
            >
                <div 
                    className="tweet-card-button"
                >
                    <Button 
                        link={props.link}
                        target="_blank"
                        text="View tweet"
                    />
                </div>

                <div 
                    className="tweet-card-date"
                >
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default TwitterCard