function TestimonialCard(props) {    
    return (
        <div className="quote-card">
            <div className="quote-card-header">
                "{props.header}"
            </div>

            <div className="quote-card-body">
                <div className="quote-card-text">
                    {props.text}
                </div>

                <div className="quote-card-source">
                    — {props.source}
                </div>
                
                <div className="quote-card-company">
                    {props.company}
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard