
import { Link } from 'react-router-dom';
import estilos from './Header.module.css'
function Header() {
    return(
        <header className={estilos.header}>
           <Link to="/"> <span>UNIBANK</span></Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/consultar">Consultar</Link>
            </nav>
        </header>
    );
}
export default Header;