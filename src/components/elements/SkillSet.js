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
            >
                <button 
                    key={index}
                    className="btn btn-light skill"
                >
                    {skill}
                </button>
            </Link>
        )
    })

    return (
        <div>
            {skillSet}
        </div>
    )
}

export default SkillSet