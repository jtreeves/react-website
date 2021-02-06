import Introduction from '../sections/Introduction'
import SkillSet from '../sections/SkillSet'

function Resume() {
    const name = 'Resume'
    const description = 'Here is my current resume.'
    const skills = ['JavaScript', 'Python', 'Ruby']

    return (
        <div>
            <Introduction 
                name={name}
                description={description}
            />

            <SkillSet
                skills={skills}
            />
        </div>
    )
}

export default Resume