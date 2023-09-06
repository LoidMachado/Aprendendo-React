import { useState } from 'react';


function Condicional() {
    const [email, setemail] = useState()
    const [userEmail, setuserEmail] = useState()
    function enviarEmail(e) {    
        e.preventDefault()
        setuserEmail(email)
        console.log("testando")
    }
    function limparEmail() { 
        setuserEmail("")
    }

    return(
        <div>
            <h2>Cadastre o seu E-mail</h2>
            <form>
                <input type="email" placeholder="Digite o seu E-mail..." onChange={(e)=>setemail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar-email</button>
                 
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional