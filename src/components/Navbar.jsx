const Navbar = ({ setPage, data }) => {

    const changePage = (n) => {
        setPage(n)
    }
    return (
        <nav>
            <ul>
                <p>
                    covid data
                </p>
                <li><a onClick={() => changePage(1)}>World Data</a></li>
                <li><a onClick={() => changePage(2)}>{data.country} Data</a></li>
            </ul>
        </nav>
    )
}

export default Navbar