import { Link } from 'react-router-dom'

import scroll from '../../utilities/scroll'

function ProjectHighlight(props) {
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
                        className="square-content card"
                    />
                </div>

                <div className="square-content card project-overlay">
                    <div className="project-title">
                        {props.name}
                    </div>
                </div>
            </div>            
        </Link>
    )
}

export default ProjectHighlight