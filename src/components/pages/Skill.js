import { useLocation } from 'react-router-dom'

import Card from '../elements/Card'
import SkillSet from '../elements/SkillSet'

import skills from '../../database/skills'
import projects from '../../database/projects'

function Skill() {
    const location = useLocation()
    const specificSkill = location.state.skill
    const skillsArray = Object.keys(skills)

    const projectList = skills[specificSkill].map((project, index) => {
        return (
            <div key={index}>
                <Card
                    image={projects[project].image}
                    title={projects[project].name}
                    subtitle={false}
                    lead={false}
                    danger={false}
                    list={false}
                    text={projects[project].description}
                    source={false}
                    cloud={projects[project].skills}
                    link={projects[project].deployedLink}
                    button={projects[project].type}
                    otherLink={projects[project].repositoryLink}
                    otherButton="Code"
                    time={projects[project].date}
                />
            </div>
        )
    })

    return (
        <div>
            <h2>{specificSkill}</h2>

            <p>
                Check out these projects I built using {specificSkill}.
            </p>

            <div className="contains-columns">
                <div className="left-column">
                    {projectList}
                </div>

                <div className="right-column">
                    <div className="card card-connect card-lock">
                        <strong className="card-header">
                            All My Skills
                        </strong>
                        <div className="card-body">
                            <SkillSet
                                skills={skillsArray}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <a 
                href="https://github.com/jtreeves" 
                target="_blank" 
                rel="noreferrer"
            >
                <button
                    className="btn btn-primary center top-margin"
                >
                    View more projects
                </button>
            </a>
        </div>
    )
}

export default Skill