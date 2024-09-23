import estilos from './Container.module.css'
function Container({children}) {
    return(
        <section className={estilos.Container}>
            {children}
        </section>
    );
}
export default Container;