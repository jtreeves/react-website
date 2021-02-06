import Education from '../sections/Education'
import Introduction from '../sections/Introduction'
import Job from '../sections/Job'
import SkillSet from '../elements/SkillSet'

function Resume() {
    const name = 'Resume'
    const description = 'I am a programmer with experience in JavaScript, Python, Ruby, and SQL.'
    
    const languages = [
        'JavaScript', 
        'Python', 
        'Ruby', 
        'HTML', 
        'CSS'
    ]

    const frameworks = [
        'Node', 
        'React', 
        'Express', 
        'Django', 
        'Flask', 
        'Bootstrap'
    ]

    const management = [
        'Git', 
        'GitHub', 
        'Heroku',
        'Command Line'
    ]

    const databases = [
        'SQL',
        'Postgres', 
        'Sequelize', 
        'MongoDB',
        'Mongoose'
    ]

    const methodologies = [
        'Object-Oriented Programming',
        'Agile Development', 
        'MVC Pattern', 
        'Responsive Design', 
        'User Stories', 
        'Wireframing'
    ]

    const hyperionDirector = {
        company: 'Hyperion Academics',
        position: 'Director',
        date: 'September 2017–present',
        items: [
            'Help clients excel in all areas of the curriculum',
            'Coordinate schedules across multiple parties',
            'Manage all financial matters, including billing and advertising'
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
            <Introduction 
                name={name}
                description={description}
            />

            <h3>Skills</h3>

            <div>
                <strong>Languages</strong>
                <SkillSet
                    skills={languages}
                />
            </div>
            
            <div>
                <strong>Frameworks</strong>
                <SkillSet
                    skills={frameworks}
                />
            </div>
            
            <div>
                <strong>Management</strong>
                <SkillSet
                    skills={management}
                />
            </div>

            <div>
                <strong>Databases</strong>
                <SkillSet
                    skills={databases}
                />
            </div>

            <div>
                <strong>Methodologies</strong>
                <SkillSet
                    skills={methodologies}
                />
            </div>

            <h3>Experience</h3>

            <Job 
                company={hyperionDirector.company}
                position={hyperionDirector.position}
                date={hyperionDirector.date}
                items={hyperionDirector.items}
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
                <button>View as PDF</button>
            </a>
        </div>
    )
}

export default Resume