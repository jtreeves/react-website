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
                    <div className="square">
                        <div className="square-content">
                            <a 
                                href={projects[lowercase].deployedLink} 
                                target="_blank" 
                                rel="noreferrer"
                                className="links"
                            >
                                <div className="project-highlight">
                                    <div className="project-image card">
                                        <img 
                                            src={projects[lowercase].image} 
                                            alt={projects[lowercase].name} 
                                            className=""
                                        />
                                    </div>

                                    <div className="project-overlay card">
                                        <div className=" project-title">
                                            View Site
                                        </div>
                                    </div>     
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="square">
                        <div className="square-content card">
                            <div className="card-header">
                                <h4>
                                    About This Project
                                </h4>
                            </div>

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
        </div>
    )
}

export default Project