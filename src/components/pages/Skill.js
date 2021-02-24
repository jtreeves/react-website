import { useLocation } from 'react-router-dom'

import ProjectHighlight from '../sections/ProjectHighlight'
import SkillCard from '../elements/SkillCard'
import Navigation from '../sections/Navigation'
import Button from '../elements/Button'
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
        
                    <div className="about-card">
                        Check out these projects I built using {specificSkill}. Click on the images to learn more about each project. Click on any of the below skills to see projects I've built with those skills.
                    </div>

                    <div className="blank-space" />

                    <div className="projects-list">
                        {projectList}
                    </div>

                    <div className="blank-space" />

                    <SkillCard 
                        description="All My Skills"
                        category={skillsArray}
                    />

                    <div className="blank-space" />
                    
                    <div className="center">
                        <Button 
                            link="https://github.com/jtreeves"
                            target="_blank"
                            text="View more projects"
                        />
                    </div>
                </main>
            </div>

            <hr />
        </div>
    )
}

export default Skill