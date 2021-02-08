function FormItem(props) {
    return (
        <div className="form-group row card-lock">
            <label 
                htmlFor={props.label}
                className="col-sm-2 col-form-label card-lock"
            >
                <strong>
                    {props.display}
                </strong>
            </label>

            <div className="col-sm-10 card-lock">
                <input
                    type={props.type}
                    name={props.label}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    className="form-control card-lock"
                />
            </div>
        </div>
    )
}

export default FormItem