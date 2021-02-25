import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
import types from '../../database/types'
import SkillCard from '../elements/SkillCard'
import PageOpener from '../sections/PageOpener'

function AllSkills() {
    return (
        <div>
            <PageOpener 
                title="Skills"
                description="Click on my skills to find out which projects I've used them with."
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