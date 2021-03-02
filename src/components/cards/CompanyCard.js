import List from '../elements/List'
import Button from '../elements/Button'

function CompanyCard(props) {    
    return (
        <div className="company-card">
            <div className="company-card-header">
                {props.company}
            </div>

            <div className="company-card-main">
                <div className="company-card-body">
                    <div className="company-card-position">
                        {props.position}
                    </div>
                    
                    <List 
                        items={props.responsibilities}
                    />
                </div>
                
                <div className="company-card-footer">
                    <div className="company-card-button">
                        <Button 
                            link={props.link}
                            target="_blank"
                            text="Company"
                        />
                    </div>

                    <div className="company-card-date">
                        {props.date}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCard