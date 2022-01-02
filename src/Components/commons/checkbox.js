const CheckBox = ({ values, setFieldValue, handleBlur, name, label }) => {
    return (
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input"
                id={`${name}`}
                name={name}
                value={values}
                onChange={() => setFieldValue(`${name}`, `${label}`)}
                onBlur={handleBlur}
                style={{ height: '2em', width: '2em', marginRight: '6px', float: 'none' }}
            />
            <label className="form-check-label" style={{ fontSize: '20px', fontWeight: '200' }} htmlFor={`${name}`}>{label}</label>
        </div>
    )
}

export default CheckBox