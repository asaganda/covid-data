const Deaths = ({ data }) => {
    return (
        <div style={{ backgroundColor: 'pink', border: '5px solid red', borderRadius: '10px'}}>
            <p>Total Deaths</p>
            <h2>{data.deaths}</h2>
        </div>
    )
}

export default Deaths