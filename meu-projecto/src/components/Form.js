import {useState} from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log("Cadastrou o usuário")
        console.log(`O usuário ${name}, foi cadastrado com a senha: ${password}`)
    }

    //criar duas constantes uma para o valor que a gente quer trabalhar e outar para alteração desse valor e atribuir elas para o useState()
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                <labe htmlFor="name"></labe>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Digite o seu nome"
                onChange={(e)=>setname(e.target.value)}
                />
                </div>
                <div>
                <labe htmlFor="passworde"></labe>
                <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Digite sua senha"
                onChange={(e)=>setpassword(e.target.value)}
                />
                </div>
                <div>
                <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form