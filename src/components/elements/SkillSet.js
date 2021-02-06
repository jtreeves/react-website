import { Link } from 'react-router-dom'

function SkillSet(props) {    
    const skillSet = props.skills.map((skill, index) => {    
        return (
            <button 
                key={index}
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