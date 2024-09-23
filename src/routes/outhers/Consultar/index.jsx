import Container  from "../../../components2/Container";
function Consultar(params) {
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
export default Consultar