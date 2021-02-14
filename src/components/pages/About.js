function About() {
    return (
        <div className="contains-columns">
            <h2>Software Engineer</h2>
            
            <div className="left-column">
                <div className="square">
                    <img 
                        src="/images/headshot.jpg" 
                        alt="Jackson Reeves" 
                        className="square-content card"
                    />
                </div>
            </div>

            <div className="right-column">
                <div className="square">
                    <p className="square-content card card-body">
                        In college, I was a humanities major, and that taught me how to think and how to express myself coherently. As a journalist, I learned how to deliver on deadline and internalize specific style guidelines. As a marketer, I learned how to track website traffic and how to customize specific content for different platforms and clientele. As a tutor, I learned how to guide others and got experience with challenges that arise in one-on-one situations in which one party knows drastically more than the other. Additionally, I think I can explain anything to a ten-year-old, which I think means that I should be able to explain anything that I understand to anyone. Now, I hope to parlay all of those skills to become a programmer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About