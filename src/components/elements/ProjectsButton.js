import Button from './Button'

function ProjectsButton() {
    return (
        <div className="center">
            <Button 
                link="/portfolio"
                target="_self"
                text="View more projects"
            />
        </div>
    )
}

export default ProjectsButton