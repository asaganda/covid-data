import React from "react"

const TotalCases = ({ covidData }) => {
    return (
        <div style={{ backgroundColor: 'pink', border: '5px solid red', borderRadius: '10px'}}>
            <p>Total Cases</p>
            <h2>{covidData}</h2>
        </div>
    )
}

export default TotalCases