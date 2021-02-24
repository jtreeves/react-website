function FormItem(props) {
    return (
        <div className="mail-section">
            <label 
                htmlFor={props.label}
                className="mail-label"
            >
                <strong>
                    {props.display}
                </strong>
            </label>

            <div className="mail-input">
                <input
                    type={props.type}
                    name={props.label}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    className="mail-input-inner"
                />
            </div>
        </div>
    )
}

export default FormItem