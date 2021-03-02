import PageOpener from '../sections/PageOpener'
import SectionHeading from '../sections/SectionHeading'
import SkillCard from '../cards/SkillCard'
import SchoolCard from '../cards/SchoolCard'
import CompanyCard from '../cards/CompanyCard'
import Button from '../elements/Button'
import types from '../../database/types'
import education from '../../database/education'
import experience from '../../database/experience'
import testimonials from '../../database/testimonials'
import TestimonialsTeaserCard from '../cards/TestimonialsTeaserCard'

import '../../style/skills.css'
import '../../style/resume.css'

function Resume() {
    const skillsHeading = <SectionHeading 
        heading="Skills" 
    />

    const educationHeading = <SectionHeading 
        heading="Education" 
    />

    const experienceHeading = <SectionHeading 
        heading="Experience" 
    />

    const testimonialHeading = <SectionHeading 
        heading="Testimonial" 
    />

    const languages = <SkillCard 
        description="Languages"
        category={types.languages}
    />

    const frameworks = <SkillCard 
        description="Frameworks"
        category={types.frameworks}
    />

    const libraries = <SkillCard 
        description="Libraries"
        category={types.libraries}
    />

    const databases = <SkillCard 
        description="Databases"
        category={types.databases}
    />

    const tools = <SkillCard 
        description="Tools"
        category={types.tools}
    />

    const methodologies = <SkillCard 
        description="Methodologies"
        category={types.methodologies}
    />

    const certificate = <SchoolCard 
        school={education.certificate.school}
        degree={education.certificate.degree}
        specialization={education.certificate.specialization}
        elements={education.certificate.courses}
        date={education.certificate.date}
        link={education.certificate.link}
    />

    const bachelor = <SchoolCard 
        school={education.bachelor.school}
        degree={education.bachelor.degree}
        specialization={education.bachelor.specialization}
        elements={education.bachelor.courses}
        date={education.bachelor.date}
        link={education.bachelor.link}
    />

    const program = <SchoolCard 
        school={education.program.school}
        degree={education.program.degree}
        specialization={education.program.specialization}
        elements={education.program.courses}
        date={education.program.date}
        link={education.program.link}
    />

    const hyperionDirector = <CompanyCard 
        company={experience.hyperionDirector.company}
        position={experience.hyperionDirector.position}
        responsibilities={experience.hyperionDirector.items}
        date={experience.hyperionDirector.date}
        link={experience.hyperionDirector.link}
    />

    const tutorSenior = <CompanyCard 
        company={experience.tutorSenior.company}
        position={experience.tutorSenior.position}
        responsibilities={experience.tutorSenior.items}
        date={experience.tutorSenior.date}
        link={experience.tutorSenior.link}
    />

    const magazineDigital = <CompanyCard 
        company={experience.magazineDigital.company}
        position={experience.magazineDigital.position}
        responsibilities={experience.magazineDigital.items}
        date={experience.magazineDigital.date}
        link={experience.magazineDigital.link}
    />

    const magazineEditor = <CompanyCard 
        company={experience.magazineEditor.company}
        position={experience.magazineEditor.position}
        responsibilities={experience.magazineEditor.items}
        date={experience.magazineEditor.date}
        link={experience.magazineEditor.link}
    />

    const testimonial = <TestimonialsTeaserCard 
        header={testimonials.nicole.callout}
        text={testimonials.nicole.quote}
        source={testimonials.nicole.name}
        company={testimonials.nicole.company}
    />

    return (
        <div>
            <PageOpener 
                title="Resume"
                description="Inquisitive full-stack developer with more than a decade of experience in education and journalism"
            />
            
            <div class="overcoming-header">
                <main>
                    <div 
                        className="uneven-columns"
                        id="resume-full"
                    >
                        <div>
                            {skillsHeading}

                            <div className="single-column">
                                {languages}
                                {frameworks}
                                {libraries}
                                {databases}
                                {tools}
                                {methodologies}
                            </div>

                            <div className="blank-space" />

                            {testimonialHeading}

                            <div className="single-column">
                                {testimonial}
                            </div>
                        </div>

                        <div>
                            {educationHeading}

                            <div className="single-column">
                                {certificate}
                                {bachelor}
                                {program}
                            </div>

                            <div className="blank-space" />

                            {experienceHeading}

                            <div className="single-column">
                                {hyperionDirector}
                                {tutorSenior}
                                {magazineDigital}
                                {magazineEditor}
                            </div>
                        </div>
                    </div> 
                    
                    <div 
                        id="resume-limited"
                    >
                        {skillsHeading}

                        <div className="two-columns">
                            <div className="single-column">
                                {languages}
                                {methodologies}
                            </div>

                            <div className="single-column">
                                {frameworks}
                                {libraries}
                                {databases}
                                {tools}
                            </div>
                        </div>

                        <div className="blank-space" />

                        <div className="two-columns">
                            <div>
                                {educationHeading}
                                
                                <div className="single-column">
                                    {certificate}
                                    {bachelor}
                                    {program}
                                </div>

                                <div className="blank-space" />
                                
                                {testimonialHeading}
                                
                                <div className="single-column">    
                                    {testimonial}
                                </div>
                            </div>

                            <div>
                                {experienceHeading}

                                <div className="single-column">
                                    {hyperionDirector}
                                    {tutorSenior}
                                    {magazineDigital}
                                    {magazineEditor}
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    <div 
                        id="resume-single"
                    >
                        {skillsHeading}

                        <div className="single-column">
                            {languages}
                            {frameworks}
                            {libraries}
                            {databases}
                            {tools}
                            {methodologies}
                        </div>

                        <div className="blank-space" />

                        {educationHeading}

                        <div className="single-column">
                            {certificate}
                            {bachelor}
                            {program}
                        </div>

                        <div className="blank-space" />

                        {experienceHeading}
                        
                        <div className="single-column">
                            {hyperionDirector}
                            {tutorSenior}
                            {magazineDigital}
                            {magazineEditor}
                        </div>

                        <div className="blank-space" />
                        
                        {testimonialHeading}
                        
                        <div className="single-column">
                            {testimonial}
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