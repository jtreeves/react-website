import { useLocation } from 'react-router-dom'

import PageOpener from '../sections/PageOpener'
import SectionHeading from '../sections/SectionHeading'
import RecentProjects from '../sections/RecentProjects'
import SkillCard from '../elements/SkillCard'
import TextCard from '../elements/TextCard'
import ImageCard from '../elements/ImageCard'
import LinksCard from '../elements/LinksCard'
import projects from '../../database/projects'
import FavoritesCard from '../elements/FavoritesCard'
import DescriptionImageCard from '../elements/DescriptionImageCard'
import CodeCard from '../elements/CodeCard'

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
                    <SectionHeading heading="Key Points" />

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

                            <TextCard 
                                header="Created"
                                body={projects[lowercase].date}
                            />
                        </div>

                        <div className="one-column-of-three">
                            <TextCard 
                                header="About Project"
                                body={projects[lowercase].summary}
                            />

                            <FavoritesCard 
                                header="Initial Goals"
                                elements={projects[lowercase].goals}
                            />
                            
                            <FavoritesCard 
                                header="Lessons Learned"
                                elements={projects[lowercase].lessons}
                            />
                        </div>

                        <div className="one-column-of-three">
                            <SkillCard 
                                description="Skills Used"
                                category={Object.keys(projects[lowercase].skills)}
                            />
                        </div>
                    </div>
                </main>

                <main>
                    <SectionHeading heading="Further Information" />

                    <div className="two-columns">
                        <div className="one-column-of-three">
                            <DescriptionImageCard 
                                header={projects[lowercase].bigImage.header}
                                url={projects[lowercase].bigImage.url}
                                description={projects[lowercase].bigImage.description}
                            />

                            <CodeCard 
                                header={projects[lowercase].code.header}
                                snippet={projects[lowercase].code.snippet}
                                language={projects[lowercase].code.language}
                                description={projects[lowercase].code.description}
                            />
                            
                            <FavoritesCard 
                                header="Future Goals"
                                elements={projects[lowercase].stretches}
                            />
                        </div>

                        <div className="one-column-of-three">
                            <FavoritesCard 
                                header="User Stories"
                                elements={projects[lowercase].userStories}
                            />

                            <DescriptionImageCard 
                                header={projects[lowercase].secondBigImage.header}
                                url={projects[lowercase].secondBigImage.url}
                                description={projects[lowercase].secondBigImage.description}
                            />

                            <CodeCard 
                                header={projects[lowercase].secondCode.header}
                                snippet={projects[lowercase].secondCode.snippet}
                                language={projects[lowercase].secondCode.language}
                                description={projects[lowercase].secondCode.description}
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