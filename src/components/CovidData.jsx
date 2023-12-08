const CovidData = ({ data }) => {

    const gridStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
    
    return (
        <div style={ gridStyle }>
            {Object.entries(data).map(([key, value]) => {
                return (
                    <div key={key} style={{ backgroundColor: 'pink', border: '5px solid red', borderRadius: '10px'}}>
                        <p>{key}</p>
                        <h2>{value.toLocaleString()}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default CovidData