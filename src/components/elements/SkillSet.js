import { Link } from 'react-router-dom'

function SkillSet(props) {    
    function scrollToTop() {
        window.scrollTo(0, 0)
    }

    const skillSet = props.skills.map((skill, index) => {    
        return (
            <Link 
                to={{
                    pathname: "/skill",
                    state: {skill}
                }}
                onClick={scrollToTop}
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