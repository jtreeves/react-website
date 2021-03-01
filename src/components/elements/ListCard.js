import List from "./List";

function ListCard(props) {    
    return (
        <div className="favorites-card">
            <div className="favorites-card-header">
                {props.header}
            </div>

            <div className="favorites-card-list">
                <List 
                    items={props.elements}
                />
            </div>
        </div>
    )
}

export default ListCard