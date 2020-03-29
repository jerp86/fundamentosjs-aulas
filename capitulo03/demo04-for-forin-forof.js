const textoPar = 'par'
const textoImpar = 'impar'

// for (let index = 0; index <= 10; index++) {
//   const decisao = index % 2 === 0 ? textoPar : textoImpar
//   console.log(`O número ${index} é ${decisao}`)
// }
const meusHerois = [
  {
    id: Math.random() * 10,
    nome: 'Zezinho',
    superPoder: 'Veloz'
  },
  {
    id: Math.random(),
    nome: 'Mariazinha',
    superPoder: 'Força'
  }
]

console.log('--- For ---')
// precisa de contador
for (let index = 0; index < meusHerois.length; index++) {
  const item = meusHerois[index]
  console.log('Nome', item.nome)
}

console.log('\n--- For In ---')
// não precisa de contador
for (const index in meusHerois) {
  const item = meusHerois[index]
  console.log('Nome*', item.nome)
}

console.log('\n--- For Of ---')
//não precisa usar o index
for (const item of meusHerois) {
  console.log('Nome**', item.nome)
}
