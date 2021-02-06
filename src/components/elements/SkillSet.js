import { Link } from 'react-router-dom'

function SkillSet(props) {    
    const skillSet = props.skills.map((skill, index) => {    
        return (
            <span 
                key={index}
                className="skill" 
            >
                <Link to={{
                    pathname: "/skill",
                    state: {skill}
                }}>
                    {skill}
                </Link>
            </span>
        )
    })

    return (
        <div className="skill-set">
            {skillSet}
        </div>
    )
}

export default SkillSet