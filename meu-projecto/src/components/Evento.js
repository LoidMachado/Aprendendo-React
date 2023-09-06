import Button from './evento/Button'
function Evento() {
    function meuEvento() {
        console.log(`Activando o primeiro evento`)
    }

    //Criando método par componente filho

    function segundoEvento() {
        console.log('Activando o segundo evento')
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}
export default Evento