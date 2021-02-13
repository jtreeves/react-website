import SkillSet from '../elements/SkillSet'

function ProjectHighlight(props) {
    return (
        <div className="project-highlight">
            <div className="card card-lock">
                <img 
                    src={props.image} 
                    alt={props.name} 
                    className="card-img-top"
                />
            </div>

            <div className="card card-lock overlay">
                <div className="card-header card-title">
                    {props.name}
                </div>

                <div className="card-body">
                    {props.description}
                    <SkillSet 
                        skills={props.skills}
                    />
                </div>

                <div className="card-footer">
                    <a 
                        href={props.deployedLink} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <button 
                            className="btn btn-primary float-left"
                        >
                            {props.deployedText}
                        </button>
                    </a>

                    <a 
                        href={props.repositoryLink} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <button 
                            className="btn btn-primary float-left other-button"
                        >
                            {props.repositoryText}
                        </button>
                    </a>
                    
                    <div 
                        className="float-right text-muted card-footer-connect"
                    >
                        {props.date}
                    </div>
                </div>
            </div>
       </div>            
    )
}

export default ProjectHighlight