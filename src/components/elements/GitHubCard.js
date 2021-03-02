import Button from './Button'

function GitHubCard(props) {    
    return (
        <div 
            className="git-card"
        >
            <div className="git-card-body">
                <p>
                    {props.message}<br />

                    <a 
                        href={props.link} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <em>
                            — {props.source}
                        </em>
                    </a>
                </p>
            </div>

            <div 
                className="git-card-footer"
            >
                <div 
                    className="git-card-button"
                >
                    <Button 
                        link={props.link}
                        target="_blank"
                        text="View repo"
                    />
                </div>

                <div 
                    className="git-card-date"
                >
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default GitHubCard