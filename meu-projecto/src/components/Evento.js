function Evento({numero}) {
    function meuEvento() {
        console.log(`Opa, fui activado ${numero}`)
    }
    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Activar</button>
        </div>
    )
}
export default Evento