import Button from './Button'

function LinksCard(props) { 
    const deployedText = `View ${props.type} on ${props.host}`
    return (
        <div className="text-card">
            <div className="text-card-header">
                {props.header}
            </div>

            <div className="text-card-body">
                <Button 
                    link={props.deployedLink}
                    target="_blank"
                    text={deployedText}
                />

                <div className="blank-space" />
                
                <Button 
                    link={props.repositoryLink}
                    target="_blank"
                    text="View code on GitHub"
                />
            </div>
        </div>
    )
}

export default LinksCard