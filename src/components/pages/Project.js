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

import '../../style/projects.css'

function Project() {
    const location = useLocation()
    const specificProject = location.state.project

    let lowercase = ''
    for (let project in projects) {
        if (projects[project].name === specificProject) {
            lowercase = project
        }
    }
    
    const imageCard = <ImageCard 
        title="Image"
        image={projects[lowercase].image}
    />

    const aboutCard = <TextCard 
        header="About Project"
        body={projects[lowercase].summary}
    />

    const inspirationCard = <TextCard 
        header="Inspiration"
        body={projects[lowercase].inspiration}
    />

    const featuresCard = <ListCard 
        header="Features"
        elements={projects[lowercase].features}
    />

    const skillsCard = <SkillCard 
        description="Skills Used"
        category={Object.keys(projects[lowercase].skills)}
    />

    const skillsApplicationsCard = <ListCard 
        header="Applications of Skills"
        elements={Object.values(projects[lowercase].skills)}
    />
    
    const linksCard = <LinksCard 
        header="Links"
        type={projects[lowercase].type}
        host={projects[lowercase].host}
        deployedLink={projects[lowercase].deployedLink} 
        repositoryLink={projects[lowercase].repositoryLink}
    />

    const createdCard = <TextCard 
        header="Created"
        body={projects[lowercase].date}
    />

    const userStoriesCard = <ListCard 
        header="User Stories"
        elements={projects[lowercase].userStories}
    />

    const firstImageCard = <DescriptionImageCard 
        header={projects[lowercase].bigImage.header}
        url={projects[lowercase].bigImage.url}
        description={projects[lowercase].bigImage.description}
    />

    const secondImageCard = <DescriptionImageCard 
        header={projects[lowercase].secondBigImage.header}
        url={projects[lowercase].secondBigImage.url}
        description={projects[lowercase].secondBigImage.description}
    />

    const thirdImageCard = <DescriptionImageCard 
        header={projects[lowercase].thirdBigImage.header}
        url={projects[lowercase].thirdBigImage.url}
        description={projects[lowercase].thirdBigImage.description}
    />

    const firstCodeCard = <CodeCard 
        header={projects[lowercase].code.header}
        snippet={projects[lowercase].code.snippet}
        language={projects[lowercase].code.language}
        description={projects[lowercase].code.description}
    />

    const secondCodeCard = <CodeCard 
        header={projects[lowercase].secondCode.header}
        snippet={projects[lowercase].secondCode.snippet}
        language={projects[lowercase].secondCode.language}
        description={projects[lowercase].secondCode.description}
    />

    const futureCard = <ListCard 
        header="Future Goals"
        elements={projects[lowercase].stretches}
    />

    return (
        <div>
            <PageOpener 
                title={specificProject}
                description="Find out how I created this project, including my inspiration, the skills I used, and sample code snippets"
            />
            
            <div class="overcoming-header">
                <main>
                    <SectionHeading 
                        heading="Key Points" 
                    />

                    <div 
                        className="three-columns" 
                        id="project-three"
                    >
                        <div className="single-column">
                            {imageCard}
                            {linksCard}
                            {createdCard} 
                        </div>

                        <div className="single-column">
                            {aboutCard}
                            {inspirationCard}
                            {featuresCard}
                        </div>

                        <div className="single-column">
                            {skillsCard}
                        </div>
                    </div>
                    
                    <div 
                        className="two-columns" 
                        id="project-two"
                    >
                        <div className="single-column">
                            {imageCard}
                            {linksCard}
                            {inspirationCard}
                            {featuresCard}
                            {createdCard} 
                        </div>

                        <div className="single-column">
                            {aboutCard}
                            {skillsCard}
                        </div>
                    </div>
                    
                    <div 
                        className="single-column" 
                        id="project-one"
                    >
                        {aboutCard}
                        {imageCard}
                        {linksCard}
                        {inspirationCard}
                        {skillsCard}
                        {featuresCard}
                        {createdCard} 
                    </div>
                </main>

                <main>
                    <SectionHeading 
                        heading="Further Information" 
                    />

                    <div 
                        className="two-columns"
                        id="project-more-two"
                    >
                        <div className="single-column">
                            {firstImageCard}
                            {firstCodeCard}
                            {thirdImageCard}
                            {futureCard}
                        </div>

                        <div className="single-column">
                            {userStoriesCard}
                            {secondImageCard}
                            {secondCodeCard}
                            {skillsApplicationsCard}
                        </div>
                    </div>
                    
                    <div 
                        className="single-column"
                        id="project-more-one"
                    >
                        {userStoriesCard}
                        {firstImageCard}
                        {firstCodeCard}
                        {secondImageCard}
                        {secondCodeCard}
                        {futureCard}
                        {thirdImageCard}
                        {skillsApplicationsCard}
                    </div>
                </main>
            </div>

            <FavoriteProjects />

            <hr />
        </div>
    )
}

export default Project