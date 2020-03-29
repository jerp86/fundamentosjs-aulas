const Matematica = require('./matematica')
// console.log(Matematica) // [Function: Matematica]
// console.log(Matematica.somar(1, 4)) // 5

const readline = require('readline')
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

terminal.question('\nInsira o primeiro valor => ', valor1 => {
  terminal.question('Insira o segundo valor => ', valor2 => {
    // console.log('VALOR 1', valor1, 'VALOR 2', valor2)
    terminal.question('Insira a Operação => ', tipoOperacao => {
      // console.log(
      //   Matematica['somar'], // [Function: somar]
      //   Matematica['multiplicar'], // [Function: multiplicar]
      // )
      const resultado = Matematica[tipoOperacao](Number(valor1), Number(valor2))
      console.log(`A operação ${tipoOperacao} de ${valor1} e ${valor2} é: ${resultado}`)
      terminal.close()
    })
  })
})
