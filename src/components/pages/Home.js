import Introduction from '../sections/Introduction'
import FavoriteProjects from '../sections/FavoriteProjects'

function Home() {
    return (
        <div>
            <Introduction />
            <hr />
            <FavoriteProjects />
            <hr />
        </div>
    )
}

export default Home