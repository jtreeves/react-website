import { Link } from 'react-router-dom'

function SkillSet(props) {    
    const skillSet = props.skills.map((skill, index) => {    
        return (
            <button 
                key={index}
                className="btn btn-light skill"
            >
                <Link to={{
                    pathname: "/skill",
                    state: {skill}
                }}>
                    {skill}
                </Link>
            </button>
        )
    })

    return (
        <div>
            {skillSet}
        </div>
    )
}

export default SkillSet