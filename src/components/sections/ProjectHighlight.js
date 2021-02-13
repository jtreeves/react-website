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
        >
            <div className="project-highlight card-connect">
                <div className="card project-image">
                    <img 
                        src={props.image} 
                        alt={props.name} 
                    />
                </div>

                <div className="card project-overlay">
                    <h4>{props.name}</h4>
                </div>
            </div>            
        </Link>
    )
}

export default ProjectHighlight