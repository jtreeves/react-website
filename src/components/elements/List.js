function List(props) {    
    const items = props.items.map((item, index) => {  
        if (typeof item === 'string') {
            return (
                <li 
                    key={index}
                    className="list-item-specific" 
                >
                    {item}
                </li>
            )

        } else {
            return (
                <li
                    key={index}
                    className="list-item-specific"
                >
                    <em>{item.title}</em> by {item.creator}
                </li>
            )
        }
    })

    return (
        <ul className="list-full">
            {items}
        </ul>
    )
}

export default List