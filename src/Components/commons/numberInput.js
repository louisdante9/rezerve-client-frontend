const NumberInput = ({ num, label, title, updater }) => {
    const handleMinus = () => {
        if (num === 0) {
            return
        }
        console.log(num, 'num')
        updater(`${label}`, num - 1)
    }
    const handleAdd = () => {
        console.log(num, 'num')
        updater(`${label}`, num + 1)
    }
    return (
        <div className="col-12">
            {/* <!-- guest list  --> */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <p className="text-dark" style={{ fontSize: '25px', fontWeight: '200' }}>{title}</p>
                </div>
                <div
                    className="input-group w-auto justify-content-end align-items-center"
                    style={{ width: '65px', textAlign: 'center', fontSize: '25px', fontWeight: '200' }}
                >
                    <div
                        className="button-minus border bg-white rounded-circle  icon-shape icon-xxl mx-1 lh-0 noselect"
                        style={{ cursor: 'pointer' }}
                        onClick={handleMinus}
                    >
                        -
                    </div>
                    <div style={{ width: '65px' }}>{num}</div>
                    <div
                        className="button-plus border bg-white rounded-circle icon-shape icon-xxl lh-0 noselect"
                        style={{ cursor: 'pointer' }}
                        onClick={handleAdd}
                    >+</div>
                </div>
            </div>

        </div>
    )
}

export default NumberInput;
