import { useState } from "react"

const Userform = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    //Criando a função que irá receber os dados do forumlário e enviar para o backend
    const handleSubmit = (event) => {
        // Evita o comportamento padrão do formulário e não recarrega a página
        event.preventDefault()
        // Aqui seria feito o envio dos dados para a API, porém iremos simular com um console.log
        console.log(name, email)
    }

    return (
        <>
        <h1>Forumulário de Cadastro:</h1>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Digite o seu nome"
            value = {name}
            // "Quando o valor do input mudar, pegue o novo valor (e.target.value) e mande atualizar o estado name (setName())"
            onChange={(e) => setName(e.target.value)} 
            />
            <br /><br />
            <input type="email" 
            placeholder="Digite o seu email"
            value = {email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            <br /><br />
            <button type="submit">Cadastrar</button>
            <br /><br />
            {name}
            <br />
            {email}
        </form>
        </>
    )
}

export default Userform