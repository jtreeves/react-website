import SkillSet from '../elements/SkillSet'

function SkillCard(props) {    
    return (
        <div className="skill-card">
            <div className="skill-card-header">
                {props.description}
            </div>

            <div className="skill-card-body">
                <SkillSet
                    skills={props.category}
                />
            </div>
        </div>
    )
}

export default SkillCard