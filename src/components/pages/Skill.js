import { useLocation } from 'react-router-dom'

import PageOpener from '../sections/PageOpener'
import ProjectHighlight from '../sections/ProjectHighlight'
import SkillCard from '../elements/SkillCard'
import Button from '../elements/Button'
import skills from '../../database/skills'
import projects from '../../database/projects'

function Skill() {
    const location = useLocation()
    const specificSkill = location.state.skill
    const skillsArray = Object.keys(skills)
    const description = `Check out these projects I built using ${specificSkill}. Click on the images to learn more about each project. Click on any of the below skills to see projects I've built with those skills.`

    const projectList = skills[specificSkill].map((project, index) => {
        return (
            <div 
                key={index}
                className="adjusting-contained"
            >
                <ProjectHighlight 
                    image={projects[project].image}
                    name={projects[project].name}
                    description={projects[project].description}
                />
            </div>
        )
    })

    return (
        <div>
            <PageOpener 
                title={specificSkill}
                description={description}
            />
            
            <div class="overcoming-header">
                <main>
                    <div className="adjusting-display-area">
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
                            link="/portfolio"
                            target="_self"
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