import PageOpener from '../sections/PageOpener'
import SkillCard from '../cards/SkillCard'
import types from '../../database/types'

import '../../style/skills.css'

function AllSkills() {
    const languages = <SkillCard 
        description="Languages"
        category={types.languages}
    />

    const frameworks = <SkillCard 
        description="Frameworks"
        category={types.frameworks}
    />

    const libraries = <SkillCard 
        description="Libraries"
        category={types.libraries}
    />

    const databases = <SkillCard 
        description="Databases"
        category={types.databases}
    />

    const tools = <SkillCard 
        description="Tools"
        category={types.tools}
    />

    const methodologies = <SkillCard 
        description="Methodologies"
        category={types.methodologies}
    />

    return (
        <div>
            <PageOpener 
                title="Skills"
                description="Check out these lists of my skills, and click on any skill to find out how I employed them in different projects"
            />
            
            <div class="overcoming-header">
                <main>
                    <div 
                        className="three-columns"
                        id="skills-three"
                    >
                        <div className="single-column">
                            {languages}
                            {libraries}
                        </div>

                        <div className="single-column">
                            {methodologies}
                        </div>

                        <div className="single-column">
                            {frameworks}
                            {databases}
                            {tools}
                        </div>
                    </div>

                    <div 
                        className="two-columns"
                        id="skills-two"
                    >
                        <div className="single-column">
                            {languages}
                            {methodologies}
                        </div>

                        <div className="single-column">
                            {frameworks}
                            {libraries}
                            {databases}
                            {tools}
                        </div>
                    </div>
                    
                    <div 
                        className="single-column"
                        id="skills-one"
                    >
                        {languages}
                        {frameworks}
                        {libraries}
                        {databases}
                        {tools}
                        {methodologies}
                    </div>
                </main>
            </div>

            <hr />
        </div>
    )
}

export default AllSkills