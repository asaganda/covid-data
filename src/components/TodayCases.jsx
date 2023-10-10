const TodayCases = ({ data }) => {
    return (
        <div style={{ backgroundColor: 'pink', border: '5px solid red', borderRadius: '10px'}}>
            <p>Today Cases</p>
            <h2>{data.todayCases}</h2>
        </div>
    )
}
export default TodayCases