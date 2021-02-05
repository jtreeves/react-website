function Project(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img 
                src={props.image} 
                alt={props.name} 
                className="project"
            />
            <p>
                <a 
                    href={props.deployedLink} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <strong>App</strong>
                </a>
                &nbsp;|&nbsp;
                <a 
                    href={props.repositoryLink} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <strong>Code</strong>
                </a>
            </p>
        </div>
    )
}

export default Project