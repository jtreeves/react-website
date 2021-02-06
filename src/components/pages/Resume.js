import Education from '../sections/Education'
import Introduction from '../sections/Introduction'
import Job from '../sections/Job'
import SkillSet from '../sections/SkillSet'

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

            {/* <Job />

            <Education /> */}
        </div>
    )
}

export default Resume