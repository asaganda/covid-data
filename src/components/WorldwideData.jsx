const WorldwideData = ({ data }) => {
    return (
        Object.entries(data).map(([key, value]) => {
            return (
                <div key={key} style={{ backgroundColor: 'pink', border: '5px solid red', borderRadius: '10px'}}>
                    <p>{key}</p>
                    <h2>{value.toLocaleString()}</h2>
                </div>
            )
        })
    )
}

export default WorldwideData