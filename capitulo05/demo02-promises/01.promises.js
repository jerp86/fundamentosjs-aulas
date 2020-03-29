const readline = require('readline')
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// terminal.question('Qual é seu nome?\n', nome => {
//   terminal.question('Qual é seu telefone?\n', telefone => {
//     console.log(`
//       Nome: ${nome}
//       Telefone: ${telefone}
//     `)
//     terminal.close()
//   })
// })

function questionAsync(texto) {
  return new Promise((resolve, reject) => {
    terminal.question(`${texto}\n`, resolve)
  })
}

let nome = ''
let telefone = ''
Promise.resolve()
  .then(() => questionAsync('Qual é seu Nome?'))
  .then(respostaNome => {
    if (!respostaNome) throw new Error('Nome não pode ser vazio!')
    if (respostaNome.length < 3) throw new Error('Node deve conter no mínimo 3 letras')

    nome = respostaNome
  })
  .then(() => questionAsync('Qual é seu Telefone?'))
  .then(respostaTelefone => {
    if (!respostaTelefone) throw new Error('Telefone não pode ser vazio!')
    if (isNaN(respostaTelefone)) throw new Error('Telefone deve ser Número e não texto!')
    if (respostaTelefone.length < 6) throw new Error('Telefone deve conter no mínimo 6 dígitos!')

    telefone = respostaTelefone
  })
  .then(() => {
    console.log(`
      Nome: ${nome}
      Telefone: ${telefone}
    `)
  })
  .catch(err => {
    console.error('Deu ruim***', err)
  })
  .finally(() => terminal.close())
