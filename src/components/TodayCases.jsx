/* eslint-disable react/prop-types */
const TodayCases = (props) => {
    return (
        <div style={{ backgroundColor: 'pink', border: '5px solid red', borderRadius: '10px'}}>
            <p>Today Cases</p>
            <h2>{props.data.todayCases}</h2>
        </div>
    )
}
export default TodayCases