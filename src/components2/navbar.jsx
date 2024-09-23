import { Link } from "react-router-dom"
function Navbar(params) {
    return(
        <nav>
            <ul>
                <li> <Link to="/"> Unibank</Link></li>
                <li><Link to="/">Conta</Link></li>
                <li><Link to= "/">Home</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar