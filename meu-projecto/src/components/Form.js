function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou o usuário")
    }
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                <labe htmlFor="name"></labe>
                <input type="text" id="name" name="name" placeholder="Digite o seu nome"/>
                </div>
                <div>
                <labe htmlFor="passworde"></labe>
                <input type="password" id="password" name="password" placeholder="Digite sua senha"/>
                </div>
                <div>
                <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form