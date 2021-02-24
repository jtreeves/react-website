import Card from '../elements/Card'
import Button from '../elements/Button'
import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
import experience from '../../database/experience'
import education from '../../database/education'
import types from '../../database/types'
import SkillCard from '../elements/SkillCard'
import SchoolCard from '../elements/SchoolCard'

function Resume() {
    return (
        <div>
            <Navigation />
            
            <div class="overcoming-header">
                <main>
                    <SectionHeading heading="Resume" />

                    <div className="about-card">
                        Inquisitive full-stack developer with more than a decade of experience in education and journalism. Hoping to combine long-time loves of editing and data analysis to produce clean, performative code.
                    </div>

                    <div className="blank-space" />

                    <div className="uneven-columns">
                        <div>
                            <SectionHeading heading="Skills" />

                            <div className="one-column-of-three">

                                <SkillCard 
                                    description="Languages"
                                    category={types.languages}
                                />
                                
                                <SkillCard 
                                    description="Frameworks"
                                    category={types.frameworks}
                                />
                                
                                <SkillCard 
                                    description="Libraries"
                                    category={types.libraries}
                                />
                                
                                <SkillCard 
                                    description="Databases"
                                    category={types.databases}
                                />
                                
                                <SkillCard 
                                    description="Tools"
                                    category={types.tools}
                                />
                                
                                <SkillCard 
                                    description="Methodologies"
                                    category={types.methodologies}
                                />
                            </div>
                        </div>

                        <div>
                            <SectionHeading heading="Education" />

                            <div className="one-column-of-three">
                                <SchoolCard 
                                    school={education.certificate.school}
                                    degree={education.certificate.degree}
                                    specialization={education.certificate.specialization}
                                    elements={education.certificate.courses}
                                    date={education.certificate.date}
                                    link={education.certificate.link}
                                />
                                
                                <SchoolCard 
                                    school={education.bachelor.school}
                                    degree={education.bachelor.degree}
                                    specialization={education.bachelor.specialization}
                                    elements={education.bachelor.courses}
                                    date={education.bachelor.date}
                                    link={education.bachelor.link}
                                />
                                
                                <SchoolCard 
                                    school={education.program.school}
                                    degree={education.program.degree}
                                    specialization={education.program.specialization}
                                    elements={education.program.courses}
                                    date={education.program.date}
                                    link={education.program.link}
                                />
                            </div>

                            <div className="blank-space" />

                            <SectionHeading heading="Experience" />

                            <div className="one-column-of-three">
                                <Card 
                                    image={false}
                                    title={experience.hyperionDirector.position}
                                    subtitle={experience.hyperionDirector.company}
                                    lead={false}
                                    danger={false}
                                    list={true}
                                    text={experience.hyperionDirector.items}
                                    source={false}
                                    cloud={false}
                                    link={experience.hyperionDirector.link}
                                    button="Company"
                                    otherLink={false}
                                    otherButton={false}
                                    time={experience.hyperionDirector.date}
                                />
                                
                                <Card 
                                    image={false}
                                    title={experience.tutorSenior.position}
                                    subtitle={experience.tutorSenior.company}
                                    lead={false}
                                    danger={false}
                                    list={true}
                                    text={experience.tutorSenior.items}
                                    source={false}
                                    cloud={false}
                                    link={experience.tutorSenior.link}
                                    button="Company"
                                    otherLink={false}
                                    otherButton={false}
                                    time={experience.tutorSenior.date}
                                />
                                
                                <Card 
                                    image={false}
                                    title={experience.magazineDigital.position}
                                    subtitle={experience.magazineDigital.company}
                                    lead={false}
                                    danger={false}
                                    list={true}
                                    text={experience.magazineDigital.items}
                                    source={false}
                                    cloud={false}
                                    link={experience.magazineDigital.link}
                                    button="Company"
                                    otherLink={false}
                                    otherButton={false}
                                    time={experience.magazineDigital.date}
                                />
                                
                                <Card 
                                    image={false}
                                    title={experience.magazineEditor.position}
                                    subtitle={experience.magazineEditor.company}
                                    lead={false}
                                    danger={false}
                                    list={true}
                                    text={experience.magazineEditor.items}
                                    source={false}
                                    cloud={false}
                                    link={experience.magazineEditor.link}
                                    button="Company"
                                    otherLink={false}
                                    otherButton={false}
                                    time={experience.magazineEditor.date}
                                />
                            </div>
                        </div>
                    </div> 
                
                    <div className="center">
                        <Button 
                            link="/Jackson_Reeves_Resume.pdf"
                            text="View as PDF"
                        />
                    </div>
                </main>
            </div>

            <hr />
        </div>
    )
}

export default Resume