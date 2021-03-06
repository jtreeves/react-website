import { Link } from 'react-router-dom'

import scroll from '../../utilities/scroll'

function ProjectHighlightCard(props) {
    return (
        <Link
            to={{
                pathname: "/project",
                state: {project: props.name}
            }}
            onClick={scroll}
            className="links"
        >
            <div className="project-highlight square">
                <div className="project-image">
                    <img 
                        src={props.image} 
                        alt={props.name} 
                        className="square-content"
                    />
                </div>

                <div className="square-content project-overlay">
                    <div className="project-title">
                        {props.name}
                    </div>

                    <div className="hr-heavy" />
                        
                    <div className="project-description">
                        {props.description}
                    </div>
                </div>
            </div>            
        </Link>
    )
}

export default ProjectHighlightCard