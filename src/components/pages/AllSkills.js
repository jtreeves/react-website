import SkillSet from '../elements/SkillSet'

import types from '../../database/types'

function AllSkills() {
    return (
        <div className="contains-columns">
            <h2>Skills</h2>
            <div className="left-column">
                <div className="card card-connect card-lock">
                    <strong className="card-header">
                        Languages
                    </strong>
                    <div className="card-body">
                        <SkillSet
                            skills={types.languages}
                        />
                    </div>
                </div>

                <div className="card card-connect card-lock">
                    <strong className="card-header">
                        Frameworks
                    </strong>
                    <div className="card-body">
                        <SkillSet
                            skills={types.frameworks}
                        />
                    </div>
                </div>

                <div className="card card-connect card-lock">
                    <strong className="card-header">
                        Libraries
                    </strong>
                    <div className="card-body">
                        <SkillSet
                            skills={types.libraries}
                        />
                    </div>
                </div>

                <div className="card card-connect card-lock">
                    <strong className="card-header">
                        Databases
                    </strong>
                    <div className="card-body">
                        <SkillSet
                            skills={types.databases}
                        />
                    </div>
                </div>
            </div>

            <div className="right-column">
                <div className="card card-connect card-lock">
                    <strong className="card-header">
                        Methodologies
                    </strong>
                    <div className="card-body">
                        <SkillSet
                            skills={types.methodologies}
                        />
                    </div>
                </div>

                <div className="card card-connect card-lock">
                    <strong className="card-header">
                        Tools
                    </strong>
                    <div className="card-body">
                        <SkillSet
                            skills={types.tools}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSkills