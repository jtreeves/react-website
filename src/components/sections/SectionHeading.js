function SectionHeading(props) {
    return (
        <div className="section-heading">
            <p>
                <hr />
            </p>

            <p>
                {props.heading}
            </p>

            <p>
                <hr />
            </p>
        </div>
    )
}

export default SectionHeading