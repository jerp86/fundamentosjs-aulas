const readline = require('readline')
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function questionAsync(texto) {
  return new Promise((resolve, reject) => {
    terminal.question(`${texto}\n`, msg => {
      !!msg ? resolve(msg) : reject(new Error('O campo não pode ser vazio!!'))
    })
  })
}

async function main() {
  try {
    const nome = await questionAsync('Qual é seu nome?')
    if (nome.length < 3) throw new Error('Nome deve conter no mínimo 3 letras')

    const telefone = await questionAsync('Qual é seu telefone?')
    if (isNaN(telefone)) throw new Error('Telefone deve ser Número e não texto!')
    if (telefone.length < 6) throw new Error('Telefone deve conter no mínimo 6 dígitos!')

    console.log(`
      Nome: ${nome}
      Telefone: ${telefone}
    `)
  } catch (error) {
    console.error('Deu ruim***', error.stack)
  } finally {
    terminal.close()
  }
}

main()
