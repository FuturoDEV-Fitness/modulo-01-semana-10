// importação de um componente
import { useState } from "react"
import Card from "./components/Card.jsx"
import CardUsuario from "./components/CardUsuario.jsx"

// componente React
export default function App(){
  // bloco superior | somente javascript
  const titulo = 'Curso React'
  const subtitulo = 'Aprendendo a usar DOM'

  const [soAdmin, setSoAdmin] = useState(false)
  const [nome, setNome] = useState("Bruno")

  function mensagemBoasVindas(){
    alert("Sejam bem-vindos ao React!")
  }

  const listaUsuarios = [{
    nome: "Bruno",
    email: "email@email.com",
    admin: false,
    senha: 1234
  },
  {
    nome: "Nicolas",
    email: "email@email.com",
    admin: false,
    senha: 1234
  },
  {
    nome: "Charles",
    email: "email@email.com",
    admin: true,
    senha: 1234
  },
  {
    nome: "Alana",
    email: "email@email.com",
    admin: true,
    senha: 1234
  },
  {
    nome: "Renata",
    email: "email@email.com",
    admin: false,
    senha: 1234
  },
  {
    nome: "Wallis",
    email: "email@email.com",
    admin: false,
    senha: 1234
  },
]

  // const listaSoAdmin = listaUsuarios.filter((itemAtual) => {
  //   if(itemAtual.admin){
  //     return true
  //   }
  // })
  
  const listaFiltrados = listaUsuarios.filter((itemAtual) => {
    if(soAdmin && itemAtual.admin){
      return true
    } else if(!soAdmin){
      return true
    } else {
      return false
    }
  })

  function chamarFiltro(){
    setSoAdmin(!soAdmin)
    alert(soAdmin)
  }

  // somente no return podemos usar HTML
  return (
    // o elemento pai é obirgatório
    // a tag <></> é um fragment
    <>
      <h1>Olá, mundo!</h1>
      {/* uso do componente */}
      {/* <Card titulo={titulo} subtitulo={subtitulo} /> */}
      {/* <button onClick={mensagemBoasVindas}>Exibir mensagem</button> */}
      {/* <button onClick={() => alert("Segundo exemplo")}>Segunda mensagem</button> */}
      {/* renderização de listas */}
      <button onClick={chamarFiltro}>Filtrar items</button>
      {listaFiltrados.map((itemAtual, index) => (
        <div key={index}>
          <CardUsuario nome={itemAtual.nome} email={itemAtual.email} />
          {/* renderização condicional com ternário */}
          {/* {itemAtual.admin ? <span>Usuário admin</span> : ""} */}
          {/* renderização condicional com operador AND (&&) */}
          {itemAtual.admin && <span>Usuário admin</span>}
        </div>
      ))}

      <hr />
      <input type="text" value={nome} onChange={(evento) => setNome(evento.target.value)}/>
      <h1>{nome}</h1>
    </>
  )
}

//export default App;

// {listaUsuarios.map((itemAtual, index) => (
//   <div key={index}>
//     <CardUsuario nome={itemAtual.nome} email={itemAtual.email} />
//     {/* renderização condicional com ternário */}
//     {/* {itemAtual.admin ? <span>Usuário admin</span> : ""} */}
//     {/* renderização condicional com operador AND (&&) */}
//     {itemAtual.admin && <span>Usuário admin</span>}
//   </div>
// ))}