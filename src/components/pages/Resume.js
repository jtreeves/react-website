import Card from '../elements/Card'
import SkillSet from '../elements/SkillSet'

import experience from '../../database/experience'
import education from '../../database/education'
import types from '../../database/types'

function Resume() {
    return (
        <div>
            <h2>Resume</h2>

            <p>
                I am a programmer with experience in JavaScript, Python, and SQL.
            </p>

            <div className="contains-columns">
                <div className="left-column">
                    <h3>Experience</h3>
        
                    <Card 
                        image={experience.hyperionDirector.image}
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
                        image={experience.tutorSenior.image}
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
                        image={experience.magazineDigital.image}
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
                        image={experience.magazineEditor.image}
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

                <div className="right-column">
                    <h3>Skills</h3>

                    <div className="card card-connect card-lock">
                        <strong className="card-header">
                            Languages
                        </strong>
                        <div className="card-body">
                            <SkillSet
                                skills={types.languages}
                            />
                        </div>
                    </div>
                    
                    <div className="card card-connect card-lock">
                        <strong className="card-header">
                            Frameworks
                        </strong>
                        <div className="card-body">
                            <SkillSet
                                skills={types.frameworks}
                            />
                        </div>
                    </div>
                    
                    <div className="card card-connect card-lock">
                        <strong className="card-header">
                            Libraries
                        </strong>
                        <div className="card-body">
                            <SkillSet
                                skills={types.libraries}
                            />
                        </div>
                    </div>
                    
                    <div className="card card-connect card-lock">
                        <strong className="card-header">
                            Databases
                        </strong>
                        <div className="card-body">
                            <SkillSet
                                skills={types.databases}
                            />
                        </div>
                    </div>

                    <div className="card card-connect card-lock">
                        <strong className="card-header">
                            Tools
                        </strong>
                        <div className="card-body">
                            <SkillSet
                                skills={types.tools}
                            />
                        </div>
                    </div>

                    <div className="card card-connect card-lock">
                        <strong className="card-header">
                            Methodologies
                        </strong>
                        <div className="card-body">
                            <SkillSet
                                skills={types.methodologies}
                            />
                        </div>
                    </div>

                    <h3>Education</h3>
                    
                    <Card 
                        image={education.certificate.image}
                        title={education.certificate.degree}
                        subtitle={education.certificate.school}
                        lead={education.certificate.specialization}
                        danger={false}
                        list={true}
                        text={education.certificate.courses}
                        source={false}
                        cloud={false}
                        link={education.certificate.link}
                        button="School"
                        otherLink={false}
                        otherButton={false}
                        time={education.certificate.date}
                    />

                    <Card 
                        image={education.bachelor.image}
                        title={education.bachelor.degree}
                        subtitle={education.bachelor.school}
                        lead={education.bachelor.specialization}
                        danger={false}
                        list={true}
                        text={education.bachelor.courses}
                        source={false}
                        cloud={false}
                        link={education.bachelor.link}
                        button="School"
                        otherLink={false}
                        otherButton={false}
                        time={education.bachelor.date}
                    />
                    
                    <Card 
                        image={education.program.image}
                        title={education.program.degree}
                        subtitle={education.program.school}
                        lead={education.program.specialization}
                        danger={false}
                        list={true}
                        text={education.program.courses}
                        source={false}
                        cloud={false}
                        link={education.program.link}
                        button="School"
                        otherLink={false}
                        otherButton={false}
                        time={education.program.date}
                    />
                </div>
            </div>

            <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noreferrer"
            >
                <button
                    className="btn btn-primary center top-margin"
                >
                    View as PDF
                </button>
            </a>
        </div>
    )
}

export default Resume