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
        <div className="skillSet">
            {skillSet}
        </div>
    )
}

export default SkillSet