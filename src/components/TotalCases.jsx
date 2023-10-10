const TotalCases = ({ data }) => {
    return (
        <div style={{ backgroundColor: 'pink', border: '5px solid red', borderRadius: '10px'}}>
            <p>Total Cases</p>
            <h2>{data.cases}</h2>
        </div>
    )
}

export default TotalCases