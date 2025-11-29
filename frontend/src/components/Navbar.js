import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">
            <Link to="/">
            <h1 className="logo">Logo</h1>
            </Link>
        </div>
    )
}

export default Navbar