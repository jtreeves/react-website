function SkillSet(props) {    
    const skillSet = props.skills.map((skill, index) => {    
        return (
            <span 
                key={index}
                className="skill" 
            >
                {skill}
            </span>
        )
    })

    return (
        <div>
            {skillSet}
        </div>
    )
}

export default SkillSet