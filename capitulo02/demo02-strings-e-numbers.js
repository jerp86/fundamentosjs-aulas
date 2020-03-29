let salarioDoAmigo = 1000
let meuSalario = "2999"

console.log(salarioDoAmigo + meuSalario) // 10002999

console.log(typeof (salarioDoAmigo), salarioDoAmigo) // number 1000

console.log(typeof (meuSalario), meuSalario) // string 2999

let meuSalarioCorrigido = Number(meuSalario)
console.log(salarioDoAmigo + meuSalarioCorrigido) // 3999

let meuSalarioComLetra = "2999aaa"
console.log(
  isNaN(meuSalarioComLetra), // true
  isNaN(meuSalario) // false
)

let minhaString = 'Olá mundo!'
let minhaOutraString = 'Olá mundo2'
let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString}. AE!`

console.log(minhaStringComVariaveis) // Olá mundo! - Olá mundo2. AE!
