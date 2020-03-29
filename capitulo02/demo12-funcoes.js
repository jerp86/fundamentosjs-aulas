function nomeDaFuncao(parametro1) {
  // bloco de código
}

function queDiaEHoje() {
  const data = new Date()
  console.log(`Hoje é dia: ${data.getDate()}`)
}
queDiaEHoje() // Hoje é dia: 23

function soma(valor1, valor2) {
  console.log(`A soma de ${valor1} + ${valor2} é:`, valor1 + valor2)
}
soma(10, 20) // A soma de 10 + 20 é: 30
soma(3, 4) // A soma de 3 + 4 é: 7

// Funções podem retornar valores
function soma(valor1, valor2) {
  return valor1 + valor2
}
const idade = 20
const tamanho = 10
const resultado = soma(idade, tamanho)
console.log('resultado', resultado) // resultado 30

function multiplicar(valor1, valor2) {
  const resultado = valor1 * valor2
  return resultado
}
console.log(`O resultado da multiplicação é:`, multiplicar(10, 30)) // O resultado da multiplicação é: 300

const funcionario1 = {
  nome: 'Zezinho',
  desconto: 0.2,
  salarioBruto: 2000,
  salarioLiquido: 0
}

const funcionario2 = {
  nome: 'Mariazinha',
  desconto: 0.1,
  salarioBruto: 2000,
  salarioLiquido: 0
}

// const descontoFuncionario1 = funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto)
// const descontoFuncionario2 = funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto)
// console.log(`
//   Funcionário1: ${descontoFuncionario1}
//   Funcionário2: ${descontoFuncionario2}
// `)
function calcularDesconto(salarioBruto, desconto) {
  return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(funcionario1.salarioBruto, funcionario1.desconto)
funcionario2.salarioLiquido = calcularDesconto(funcionario2.salarioBruto, funcionario2.desconto)
console.log(`
  Funcionário ${funcionario1.nome}: ${funcionario1.salarioLiquido}
  Funcionário ${funcionario2.nome}: ${funcionario2.salarioLiquido}
`)
