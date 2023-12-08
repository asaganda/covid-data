const Navbar = ({ setPage, data, page }) => {

    const changePage = (n) => {
        setPage(n)
    }
    return (
        <nav>
            <h1>covid data</h1>
            <ul>
                <li className={ page === 1 ? "active" : ""}><a onClick={() => changePage(1)}>World Data</a></li>
                <li className={ page === 2 ? "active" : ""}><a onClick={() => changePage(2)}>{data.country} Data</a></li>
            </ul>
        </nav>
    )
}

export default Navbar