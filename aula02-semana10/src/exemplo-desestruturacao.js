// const usuario1 = {
//   nome: "Bruno",
//   email: "email@email.com",
//   senha: 1234
// }

const usuarios = [{
  nome: "Bruno",
  email: "email@email.com",
  senha: 1234
},
{
  nome: "Nicolas",
  email: "email@email.com",
  senha: 1234
}]

const [usuario1, usuario2] = usuarios

let {nome, email} = usuario1

console.log(nome)
console.log(email)
console.log(usuario1)