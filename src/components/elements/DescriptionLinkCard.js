import Button from './Button'

function DescriptionLinkCard(props) { 
    return (
        <div className="text-card">
            <div className="text-card-header">
                {props.header}
            </div>

            <div className="text-card-body">
                {props.description}

                <div className="blank-space" />
                
                <Button 
                    link={props.link}
                    target="_self"
                    text="View project"
                />
            </div>
        </div>
    )
}

export default DescriptionLinkCard