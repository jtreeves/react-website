import SkillSet from '../elements/SkillSet'
import Card from '../elements/Card'

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
        link: 'https://generalassemb.ly',
        image: '/images/companies/general-assembly.png',
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
        link: 'https://www.vassar.edu',
        image: '/images/companies/vassar.png',
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
        link: 'http://www.nyu.edu',
        image: '/images/companies/nyu.png',
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
                I am a programmer with experience in JavaScript, Python, and SQL.
            </p>

            <div className="contains-columns">
                <div className="left-column">
                    <h3>Experience</h3>
        
                    <Card 
                        image={hyperionDirector.image}
                        title={hyperionDirector.position}
                        subtitle={hyperionDirector.company}
                        lead={false}
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
                        lead={false}
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
                        lead={false}
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
                        lead={false}
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
                            Management
                        </strong>
                        <div className="card-body">
                            <SkillSet
                                skills={types.management}
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
                        image={certificate.image}
                        title={certificate.degree}
                        subtitle={certificate.school}
                        lead={certificate.specialization}
                        danger={false}
                        list={true}
                        text={certificate.courses}
                        source={false}
                        cloud={false}
                        link={certificate.link}
                        button="School"
                        otherLink={false}
                        otherButton={false}
                        time={certificate.date}
                    />

                    <Card 
                        image={bachelor.image}
                        title={bachelor.degree}
                        subtitle={bachelor.school}
                        lead={bachelor.specialization}
                        danger={false}
                        list={true}
                        text={bachelor.courses}
                        source={false}
                        cloud={false}
                        link={bachelor.link}
                        button="School"
                        otherLink={false}
                        otherButton={false}
                        time={bachelor.date}
                    />
                    
                    <Card 
                        image={program.image}
                        title={program.degree}
                        subtitle={program.school}
                        lead={program.specialization}
                        danger={false}
                        list={true}
                        text={program.courses}
                        source={false}
                        cloud={false}
                        link={program.link}
                        button="School"
                        otherLink={false}
                        otherButton={false}
                        time={program.date}
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