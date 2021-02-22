import Portfolio from './Portfolio'
import Contact from './Contact'
import AllSkills from './AllSkills'
import Introduction from '../sections/Introduction'
import RecentProjects from '../sections/RecentProjects'

function Home() {
    return (
        <div>
            <Introduction />
            <hr />
            <RecentProjects />
            <hr />
        </div>
    )
}

export default Home