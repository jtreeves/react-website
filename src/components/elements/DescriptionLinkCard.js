import { Link } from 'react-router-dom'

import scroll from '../../utilities/scroll'

function DescriptionLinkCard(props) { 
    return (
        <div className="text-card">
            <div className="text-card-header">
                {props.name}
            </div>

            <div className="text-card-body">
                {props.description}

                <div className="blank-space" />
                
                <Link 
                    to={{
                        pathname: "/project",
                        state: {project: props.name}
                    }}
                    onClick={scroll}
                    className="links blue-button"
                >
                    View project
                </Link>
            </div>
        </div>
    )
}

export default DescriptionLinkCard