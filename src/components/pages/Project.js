import { useLocation } from 'react-router-dom'

import projects from '../../database/projects'
import SkillSet from '../elements/SkillSet'
import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
import RecentProjects from '../sections/RecentProjects'
import SkillCard from '../elements/SkillCard'
import PageOpener from '../sections/PageOpener'
import FavoritesCard from '../elements/FavoritesCard'
import ImageCard from '../elements/ImageCard'
import QuoteCard from '../elements/QuoteCard'
import TextCard from '../elements/TextCard'
import LinksCard from '../elements/LinksCard'

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
            <PageOpener 
                title={specificProject}
                description="Here's everything about this project. Scroll down to learn more about how I built this project, including what skills I used."
            />
            
            <div class="overcoming-header">
                <main>
                    <div className="projects-list">
                        <div className="one-column-of-three">
                            <ImageCard 
                                title="Image"
                                image={projects[lowercase].image}
                            />
                            
                            <LinksCard 
                                header="Links"
                                type={projects[lowercase].type}
                                host={projects[lowercase].host}
                                deployedLink={projects[lowercase].deployedLink} 
                                repositoryLink={projects[lowercase].repositoryLink}
                            />
                        </div>

                        <div className="one-column-of-three">
                            <TextCard 
                                header="About Project"
                                body={projects[lowercase].description}
                            />
                        </div>

                        <div className="one-column-of-three">
                            <SkillCard 
                                description="Skills Used"
                                category={projects[lowercase].skills}
                            />

                            <TextCard 
                                header="Created"
                                body={projects[lowercase].date}
                            />
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