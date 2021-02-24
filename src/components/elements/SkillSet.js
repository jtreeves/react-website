import { Link } from 'react-router-dom'

import scroll from '../../utilities/scroll'

function SkillSet(props) {    
    const skillSet = props.skills.map((skill, index) => {    
        return (
            <Link 
                to={{
                    pathname: "/skill",
                    state: {skill}
                }}
                onClick={scroll}
                className="links"
            >
                <button 
                    key={index}
                    className="skill-button"
                >
                    {skill}
                </button>
            </Link>
        )
    })

    return (
        <div className="skill-set">
            {skillSet}
        </div>
    )
}

export default SkillSet