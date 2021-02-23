import { useLocation } from 'react-router-dom'

import ProjectHighlight from '../sections/ProjectHighlight'
import SkillSet from '../elements/SkillSet'
import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'

import skills from '../../database/skills'
import projects from '../../database/projects'

function Skill() {
    const location = useLocation()
    const specificSkill = location.state.skill
    const skillsArray = Object.keys(skills)

    const projectList = skills[specificSkill].map((project, index) => {
        return (
            <div key={index}>
                <ProjectHighlight 
                    image={projects[project].image}
                    name={projects[project].name}
                    description={projects[project].description}
                    skills={projects[project].skills}
                    deployedLink={projects[project].deployedLink}
                    deployedText={projects[project].type}
                    repositoryLink={projects[project].repositoryLink}
                    repositoryText="Code"
                    date={projects[project].date}
                />
            </div>
        )
    })

    return (
        <div>
            <Navigation />
            
            <div class="overcoming-header">
                <main>
                    <SectionHeading heading={specificSkill} />
        
                    <p>
                        Check out these projects I built using {specificSkill}.
                    </p>

                    <div className="projects-list">
                        {projectList}
                    </div>

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
                </main>
            </div>

            <hr />
        </div>
    )
}

export default Skill