import SkillSet from '../elements/SkillSet'
import Card from '../elements/Card'
import Education from '../sections/Education'

import types from '../../database/types'

function Resume() {
    const hyperionDirector = {
        company: 'Hyperion Academics',
        position: 'Director',
        link: 'https://hyperionacademics.tumblr.com/',
        image: '/images/companies/hyperion-academics.jpg',
        date: 'September 2017–present',
        items: [
            'Help clients excel in all areas of the curriculum',
            'Coordinate schedules across multiple parties',
            'Manage all financial matters, including billing and advertising'
        ]
    }
    
    const tutorSenior = {
        company: 'Atlanta Tutors',
        position: 'Senior Educator',
        link: 'https://atlantatutors.net',
        image: '/images/companies/atlanta-tutors.jpg',
        date: 'January 2013–September 2017',
        items: [
            'Helped clients raise failing grades to As in algebra, geometry, and calculus',
            'Enabled clients to increase their GPAs by up to 1.7 points',
            'Coached clients to obtain top scores on the SAT and ACT standardized tests',
            'Used online platforms and customized lessons to maximize success rates',
            'Guided clients in developing organizational strategies and long-term plans'
        ]
    }
    
    const magazineDigital = {
        company: 'Atlanta Magazine',
        position: 'Digital Media Producer',
        link: 'https://www.atlantamagazine.com',
        image: '/images/companies/atlanta-magazine2.png',
        date: 'April 2011–September 2013',
        items: [
            'Doubled the the magazine’s Facebook followers and tripled its Twitter followers',
            'Increased profitability of email newsletters by raising click-through rates',
            'Raised site page-views by 27 percent using social media and email marketing',
            'Produced internal reports on the website’s usage, traffic patterns, and trends',
            'Used content management systems to design and populate the website',
            'Coordinated promotional events in tandem with the marketing team'
        ]
    }
    
    const magazineEditor = {
        company: 'Atlanta Magazine',
        position: 'Assistant Editor',
        link: 'https://www.atlantamagazine.com',
        image: '/images/companies/atlanta-magazine1.png',
        date: 'April 2010–March 2011',
        items: [
            'Managed sections of the magazine, which involved writing and editing articles',
            'Interviewed Atlanta leaders and gathered public data to add substance to stories'
        ]
    }

    const certificate = {
        school: 'General Assembly',
        degree: 'Software Engineering Certificate',
        specialization: 'Full-Stack Development',
        date: 'January 2021',
        courses: [
            'JavaScript',
            'Python'
        ]
    }

    const bachelor = {
        school: 'Vassar College',
        degree: 'Bachelor of Arts',
        specialization: 'Media Studies',
        date: 'May 2009',
        courses: [
            'Media Theory',
            'Sociology of Media'
        ]
    }
    
    const program = {
        school: 'New York University',
        degree: 'Business Program',
        specialization: 'Marketing and Journalism',
        date: 'August 2007',
        courses: [
            'Marketing',
            'Journalism'
        ]
    }

    return (
        <div>
            <h2>Resume</h2>

            <p>
                I am a programmer with experience in JavaScript, Python, Ruby, and SQL.
            </p>

            <h3>Skills</h3>

            <div>
                <strong>Languages</strong>
                <SkillSet
                    skills={types.languages}
                />
            </div>
            
            <div>
                <strong>Frameworks</strong>
                <SkillSet
                    skills={types.frameworks}
                />
            </div>
            
            <div>
                <strong>Management</strong>
                <SkillSet
                    skills={types.management}
                />
            </div>

            <div>
                <strong>Databases</strong>
                <SkillSet
                    skills={types.databases}
                />
            </div>

            <div>
                <strong>Methodologies</strong>
                <SkillSet
                    skills={types.methodologies}
                />
            </div>

            <h3>Experience</h3>

            <Card 
                image={hyperionDirector.image}
                title={hyperionDirector.position}
                subtitle={hyperionDirector.company}
                danger={false}
                list={true}
                text={hyperionDirector.items}
                source={false}
                cloud={false}
                link={hyperionDirector.link}
                button="Company"
                otherLink={false}
                otherButton={false}
                time={hyperionDirector.date}
            />
            
            <Card 
                image={tutorSenior.image}
                title={tutorSenior.position}
                subtitle={tutorSenior.company}
                danger={false}
                list={true}
                text={tutorSenior.items}
                source={false}
                cloud={false}
                link={tutorSenior.link}
                button="Company"
                otherLink={false}
                otherButton={false}
                time={tutorSenior.date}
            />
            
            <Card 
                image={magazineDigital.image}
                title={magazineDigital.position}
                subtitle={magazineDigital.company}
                danger={false}
                list={true}
                text={magazineDigital.items}
                source={false}
                cloud={false}
                link={magazineDigital.link}
                button="Company"
                otherLink={false}
                otherButton={false}
                time={magazineDigital.date}
            />
            
            <Card 
                image={magazineEditor.image}
                title={magazineEditor.position}
                subtitle={magazineEditor.company}
                danger={false}
                list={true}
                text={magazineEditor.items}
                source={false}
                cloud={false}
                link={magazineEditor.link}
                button="Company"
                otherLink={false}
                otherButton={false}
                time={magazineEditor.date}
            />

            <h3>Education</h3>

            <Education 
                school={certificate.school}
                degree={certificate.degree}
                specialization={certificate.specialization}
                date={certificate.date}
                courses={certificate.courses}
            />
            
            <Education 
                school={bachelor.school}
                degree={bachelor.degree}
                specialization={bachelor.specialization}
                date={bachelor.date}
                courses={bachelor.courses}
            />
            
            <Education 
                school={program.school}
                degree={program.degree}
                specialization={program.specialization}
                date={program.date}
                courses={program.courses}
            />

            <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noreferrer"
            >
                <button
                    className="btn btn-primary center"
                >
                    View as PDF
                </button>
            </a>
        </div>
    )
}

export default Resume