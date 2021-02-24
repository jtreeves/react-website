import { useLocation } from 'react-router-dom'

import projects from '../../database/projects'
import SkillSet from '../elements/SkillSet'
import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
import RecentProjects from '../sections/RecentProjects'

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
            <Navigation />
            
            <div class="overcoming-header">
                <main>
                    <SectionHeading heading={specificProject} />
        
                    <div className="contains-columns">
                        <div className="left-column">
                            <a 
                                href={projects[lowercase].deployedLink} 
                                target="_blank" 
                                rel="noreferrer"
                                className="links"
                            >
                                <div 
                                    className="project-highlight square"
                                >
                                    <div className="project-image">
                                        <img 
                                            src={projects[lowercase].image} 
                                            alt={projects[lowercase].name} 
                                            className="square-content"
                                        />
                                    </div>

                                    <div 
                                        className="square-content project-overlay"
                                    >
                                        <div 
                                            className="project-title"
                                        >
                                            View Site
                                        </div>
                                    </div>
                                </div>            
                            </a>
                        </div>

                        <div className="right-column">
                            <div className="square">
                                <div 
                                    className="square-content card"
                                >
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
                </main>
            </div>

            <RecentProjects />

            <hr />
        </div>
    )
}

export default Project