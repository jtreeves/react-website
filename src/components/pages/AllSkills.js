import PageOpener from '../sections/PageOpener'
import SkillCard from '../elements/SkillCard'
import types from '../../database/types'

function AllSkills() {
    return (
        <div>
            <PageOpener 
                title="Skills"
                description="Check out these lists of my skills, and click on any skill to find out how I employed them in different projects"
            />
            
            <div class="overcoming-header">
                <main>
                    <div className="projects-list">
                        <div className="one-column-of-three">
                            <SkillCard 
                                description="Languages"
                                category={types.languages}
                            />
                            
                            <SkillCard 
                                description="Libraries"
                                category={types.libraries}
                            />
                        </div>

                        <div className="one-column-of-three">
                            <SkillCard 
                                description="Methodologies"
                                category={types.methodologies}
                            />
                        </div>

                        <div className="one-column-of-three">
                            <SkillCard 
                                description="Frameworks"
                                category={types.frameworks}
                            />
                            
                            <SkillCard 
                                description="Databases"
                                category={types.databases}
                            />
                            
                            <SkillCard 
                                description="Tools"
                                category={types.tools}
                            />
                        </div>
                    </div>
                </main>
            </div>

            <hr />
        </div>
    )
}

export default AllSkills