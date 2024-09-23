import Container  from "../../components2/Container";
import { Link } from "react-router-dom"
function Sucesso(params) {
    return(
        <Container>
            <h2>Consultar o estado da conta</h2>
            <form action="" method="post">
                <label htmlFor="bi"> Numero do Bilhete:</label>
                <input type="text" name="bi" id="id" />
            </form>
            <button>Enviar</button>
        </Container>
    )
}
export default Sucesso