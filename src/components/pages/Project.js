import { useLocation } from 'react-router-dom'

import projects from '../../database/projects'
import SkillSet from '../elements/SkillSet'

function Project() {
    const location = useLocation()
    const specificProject = location.state.project
    let lowercase = ''
    for (let project in projects) {
        if (projects[project].name === specificProject) {
            lowercase = project
        }
    }

    return (
        <div>
            <h2>{specificProject}</h2>

            <div className="contains-columns">
                <div className="left-column">
                    <div className="card">
                        <img 
                            src={projects[lowercase].image}
                            alt={projects[lowercase].name}
                        />
                    </div>
                </div>

                <div className="right-column">
                    <div className="card">
                        <div className="card-body">
                            {projects[lowercase].description}

                            <SkillSet 
                                skills={projects[lowercase].skills}
                            />
                        </div>

                        <div className="card-footer">
                            <a 
                                href={projects[lowercase].deployedLink} 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <button 
                                    className="btn btn-primary float-left"
                                >
                                    {projects[lowercase].type}
                                </button>
                            </a>
                
                            <a 
                                href={projects[lowercase].repositoryLink} 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <button 
                                    className="btn btn-primary float-left other-button"
                                >
                                    Code
                                </button>
                            </a>
                
                            <div 
                                className="float-right text-muted card-footer-connect"
                            >
                                {projects[lowercase].date}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project