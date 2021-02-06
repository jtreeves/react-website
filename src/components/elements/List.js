function List(props) {    
    const items = props.items.map((item, index) => {    
        return (
            <li 
                key={index}
                className="list-item" 
            >
                {item}
            </li>
        )
    })

    return (
        <ul className="list">
            {items}
        </ul>
    )
}

export default List