import Button from '../elements/Button'
import Navigation from '../sections/Navigation'
import SectionHeading from '../sections/SectionHeading'
import experience from '../../database/experience'
import education from '../../database/education'
import types from '../../database/types'
import SkillCard from '../elements/SkillCard'
import SchoolCard from '../elements/SchoolCard'
import CompanyCard from '../elements/CompanyCard'
import PageOpener from '../sections/PageOpener'

function Resume() {
    return (
        <div>
            <PageOpener 
                title="Resume"
                description="Inquisitive full-stack developer with more than a decade of experience in education and journalism. Hoping to combine long-time loves of editing and data analysis to produce clean, performative code."
            />
            
            <div class="overcoming-header">
                <main>
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
                                <CompanyCard 
                                    company={experience.hyperionDirector.company}
                                    position={experience.hyperionDirector.position}
                                    responsibilities={experience.hyperionDirector.items}
                                    date={experience.hyperionDirector.date}
                                    link={experience.hyperionDirector.link}
                                />
                                
                                <CompanyCard 
                                    company={experience.tutorSenior.company}
                                    position={experience.tutorSenior.position}
                                    responsibilities={experience.tutorSenior.items}
                                    date={experience.tutorSenior.date}
                                    link={experience.tutorSenior.link}
                                />
                                
                                <CompanyCard 
                                    company={experience.magazineDigital.company}
                                    position={experience.magazineDigital.position}
                                    responsibilities={experience.magazineDigital.items}
                                    date={experience.magazineDigital.date}
                                    link={experience.magazineDigital.link}
                                />
                                
                                <CompanyCard 
                                    company={experience.magazineEditor.company}
                                    position={experience.magazineEditor.position}
                                    responsibilities={experience.magazineEditor.items}
                                    date={experience.magazineEditor.date}
                                    link={experience.magazineEditor.link}
                                />
                            </div>
                        </div>
                    </div> 

                    <div className="blank-space" />
                
                    <div className="center">
                        <Button 
                            link="/Jackson_Reeves_Resume.pdf"
                            target="_blank"
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