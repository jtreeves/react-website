import SectionHeading from './SectionHeading'
import Button from '../elements/Button'

function CurrentProject() {
    return (
        <div>
            <SectionHeading heading="Current Project" />

            <div className="current-project">
                <div className="current-project-image">
                    <img 
                        src="/images/projects/regressions/code.jpg" 
                        alt="Code" 
                    />
                </div>

                <div className="current-project-text">
                    <h3>Regressions</h3>

                    <p>I'm continuing to build out my Python library of regression algorithms, along with the Flask app designed to help users access its results.</p>
                    
                    <strong>Upcoming Additions</strong>
                    
                    <ul>
                        <li>sinusoidal and logistic models</li>
                        <li>machine learning augmentations</li>
                        <li>evaluations for each function model</li>
                        <li>cleaner presentation of data</li>
                        <li>in-depth documentation</li>
                    </ul>
                </div>

                <div className="current-project-image">
                    <img 
                        src="/images/projects/regressionz/design.jpg" 
                        alt="Design" 
                    />
                </div>
            </div>
            
            <div className="blank-space" />
            
            <div className="center">
                <Button 
                    link="https://github.com/jtreeves/regressions_library"
                    target="_blank"
                    text="View progress"
                />
            </div>
        </div>
    )
}

export default CurrentProject