import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
import types from '../../database/types'
import SkillCard from '../elements/SkillCard'

function AllSkills() {
    return (
        <div>
            <Navigation />
            
            <div class="overcoming-header">
                <main>
                    <SectionHeading heading="Skills" />

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