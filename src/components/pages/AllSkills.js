import SkillSet from '../elements/SkillSet'
import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
import types from '../../database/types'

function AllSkills() {
    return (
        <div>
            <Navigation />
            
            <div class="overcoming-header">
                <main>
                    <SectionHeading heading="Skills" />

                    <div className="three-even-columns">
                        <div>
                            <div 
                                className="card card-connect card-lock"
                            >
                                <strong className="card-header">
                                    Languages
                                </strong>

                                <div className="card-body">
                                    <SkillSet
                                        skills={types.languages}
                                    />
                                </div>
                            </div>

                            <div 
                                className="card card-connect card-lock"
                            >
                                <strong className="card-header">
                                    Libraries
                                </strong>

                                <div className="card-body">
                                    <SkillSet
                                        skills={types.libraries}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div 
                                className="card card-connect card-lock"
                            >
                                <strong className="card-header">
                                    Tools
                                </strong>

                                <div className="card-body">
                                    <SkillSet
                                        skills={types.tools}
                                    />
                                </div>
                            </div>
                        
                            <div 
                                className="card card-connect card-lock"
                            >
                                <strong className="card-header">
                                    Frameworks
                                </strong>

                                <div className="card-body">
                                    <SkillSet
                                        skills={types.frameworks}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div 
                                className="card card-connect card-lock"
                            >
                                <strong className="card-header">
                                    Databases
                                </strong>

                                <div className="card-body">
                                    <SkillSet
                                        skills={types.databases}
                                    />
                                </div>
                            </div>
            
                            <div 
                                className="card card-connect card-lock"
                            >
                                <strong className="card-header">
                                    Methodologies
                                </strong>

                                <div className="card-body">
                                    <SkillSet
                                        skills={types.methodologies}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            
            <hr />
        </div>
    )
}

export default AllSkills