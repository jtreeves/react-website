import List from './List'
import Button from './Button'

function SchoolCard(props) {    
    return (
        <div className="school-card">
            <div className="school-card-header">
                {props.school}
            </div>

            <div className="school-card-main">
                <div className="school-card-body">
                    <div className="school-card-degree">
                        {props.degree}
                    </div>
                    
                    <div className="school-card-specialization">
                        {props.specialization}
                    </div>
                    
                    <List 
                        items={props.elements}
                    />
                </div>
                
                <div className="school-card-footer">
                    <div className="school-card-button">
                        <Button 
                            link={props.link}
                            target="_blank"
                            text="School"
                        />
                    </div>

                    <div className="school-card-date">
                        {props.date}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolCard