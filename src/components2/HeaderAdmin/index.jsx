
import { Link } from 'react-router-dom';
import estilos from './Header.module.css'
function HeaderAdmin() {
    return (
        <header className={estilos.header}>
            <Link to="/"> <span>UNIBANK</span></Link>
            <nav>
                <Link to="homeadmin/">Home</Link>
                <Link to="admin/add/banco/">Banco</Link>
                <Link to="admin/add/banco/">Corre</Link>
                
                

            </nav>
        </header>
    );
}
export default HeaderAdmin;