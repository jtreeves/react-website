import Education from '../sections/Education'
import Introduction from '../sections/Introduction'
import Job from '../sections/Job'
import SkillSet from '../elements/SkillSet'

function Resume() {
    const name = 'Resume'
    const description = 'Here is my current resume.'
    
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

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />

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

            <Job 
                company={hyperionDirector.company}
                position={hyperionDirector.position}
                date={hyperionDirector.date}
                items={hyperionDirector.items}
            />

            <Education 
                school={bachelor.school}
                degree={bachelor.degree}
                specialization={bachelor.specialization}
                date={bachelor.date}
                courses={bachelor.courses}
            />
        </div>
    )
}

export default Resume