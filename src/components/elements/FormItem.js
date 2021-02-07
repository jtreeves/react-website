function FormItem(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.label}>{props.display}</label>
            <input
                type={props.type}
                name={props.label}
                value={props.value}
                onChange={props.onChange}
                className="form-control"
            />
        </div>
    )
}

export default FormItem