/* eslint-disable react/prop-types */
const TotalCases = (props) => {

    return (
        <div style={{ backgroundColor: 'pink', border: '5px solid red', borderRadius: '10px'}}>
            <p>Total Cases</p>
            <h2>{props.data.cases.toLocaleString()}</h2>
        </div>
    )
}

export default TotalCases