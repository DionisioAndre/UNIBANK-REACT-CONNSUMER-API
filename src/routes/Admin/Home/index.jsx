import { Link } from "react-router-dom"
import Container from '../../../components2/Container'
import estilos from './Home.module.css'
import banco from '../../../img/img2.png'
import HeaderAdmin from "../../../components2/HeaderAdmin"
const HomeAdmin=()=> {
    
    return(
        <>
        <HeaderAdmin/>
        <Container>
            <div><p>Area admin </p></div>
            <div className={estilos.home}>
                
                <div className={estilos.div1}>
                    
                    <div className={estilos.area1}>
                        <h2>Area das corretoras</h2>
                        <li><Link to="/admin/add/banco/">Adicionar corretoras</Link></li>
                        <li><Link to="/admin/get/consultarPorNome/">Consultar corretoras por nome</Link></li>
                        <li><Link to="/admin/get/ConsultarBanco/">Consultar todos corretoras</Link></li>
                        <li><Link to="/admin/updateBanco/">Actualizar corretoras</Link></li>
                        <li><Link to="/admin/deleteBanco/">Remover corretoras</Link></li>
                           
                    </div>
                    <div className={estilos.area1}>
                        <h2>Area das contas</h2>
                        <li><Link to="/admin/add/conta/">Adicionar Conta</Link></li>
                        <li><Link to="/admin/get/consultarPorNome/">Consultar conta por nome</Link></li>
                        <li><Link to="/admin/get/ConsultarConta/">Consultar todas Contas</Link></li>
                        <li><Link to="/admin/updateBanco/">Actualizar conta</Link></li>
                        <li><Link to="/admin/deleteConta/">Remover Conta</Link></li>
                           
                    </div>
                    
                    
                        
                </div>
                <div className={estilos.area2}>
                        <img src={banco} alt="bancos" />
                    </div>
            </div>
        </Container>
        </>

    )
}

export default HomeAdmin