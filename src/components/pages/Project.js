import { useLocation } from 'react-router-dom'

import PageOpener from '../sections/PageOpener'
import SectionHeading from '../sections/SectionHeading'
import FavoriteProjects from '../sections/FavoriteProjects'
import SkillCard from '../elements/SkillCard'
import TextCard from '../elements/TextCard'
import ImageCard from '../elements/ImageCard'
import LinksCard from '../elements/LinksCard'
import projects from '../../database/projects'
import ListCard from '../elements/ListCard'
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
                description="Find out how I created this project, including my inspiration, the skills I used, and sample code snippets"
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
                            
                            <TextCard 
                                header="Inspiration"
                                body={projects[lowercase].inspiration}
                            />

                            <ListCard 
                                header="Features"
                                elements={projects[lowercase].features}
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

                            <DescriptionImageCard 
                                header={projects[lowercase].thirdBigImage.header}
                                url={projects[lowercase].thirdBigImage.url}
                                description={projects[lowercase].thirdBigImage.description}
                            />
                            
                            <ListCard 
                                header="Future Goals"
                                elements={projects[lowercase].stretches}
                            />
                        </div>

                        <div className="one-column-of-three">
                            <ListCard 
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

                            <ListCard 
                                header="Applications of Skills"
                                elements={Object.values(projects[lowercase].skills)}
                            />
                        </div>
                    </div>
                </main>
            </div>

            <FavoriteProjects />

            <hr />
        </div>
    )
}

export default Project