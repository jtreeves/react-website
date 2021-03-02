import List from '../elements/List'

function ListCard(props) {    
    return (
        <div className="list-card">
            <div className="list-card-header">
                {props.header}
            </div>

            <div className="list-card-elements">
                <List 
                    items={props.elements}
                />
            </div>
        </div>
    )
}

export default ListCard