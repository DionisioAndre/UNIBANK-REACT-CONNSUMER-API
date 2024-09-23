import { Link } from "react-router-dom"
import Container from '../../../components2/Container'
import estilos from './Home.module.css'
import banco from '../../../img/img2.png'

const Home=()=> {
    
    return(
        <Container>
            <div className={estilos.home}>
                
                <div className={estilos.div1}>
                    
                    <div className={estilos.area1}>
                        <h2>Faca investimentimentos seguros !</h2>
                        <p>Agora ja o podes fazer apartir de sua casa!</p>
                        <p><Link to="/"> Emiter order de compra</Link></p>
                        <div className={estilos.corretora}>
                            <h2>Faça o seu dinheiro crescer! Invista</h2>
                            <h2>O primeiro passo é abrir uma conta em qualquer corretora!</h2>
                            <p>Faça abertura de conta apartir de sua casa!</p>
                            <p><Link to="/"> Abrir conta em corretora</Link></p>
                        </div>
                    </div>
                    
                    <div className={estilos.area2}>
                        <img src={banco} alt="bancos" />
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Home