const minhaLista = []
const minhaListaDeTarefas = [
  'mandar email',
  'colocar comida para o dog',
  'limpar o quarto'
]
console.log('Minha Lista de Tarefas:', minhaListaDeTarefas)

// console.log(minhaListaDeTarefas[0]) // mandar email
// console.log(minhaListaDeTarefas[1]) // colocar comida para o dog
// console.log(minhaListaDeTarefas[4]) // undefined

// quantidade de itens do array
// console.log('Quantidade de itens na lista:', minhaListaDeTarefas.length)

// adicionar item ao final da lista
// minhaListaDeTarefas.push('formatar computador')
// console.log('\nApós adicionar 1 item:', minhaListaDeTarefas)

// remover último item da lista e guarda numa variável
// const ultimo = minhaListaDeTarefas.pop()
// console.log(`\nÚltimo item removido: "${ultimo}"`, 'Minha Lista agora:', minhaListaDeTarefas)
// Item removido: "formatar computador" Minha Lista agora: [ 'mandar email', 'colocar comida para o dog', 'limpar o quarto' ]

// remover o primeiro item da lista e guardar numa variável
// const primeiro = minhaListaDeTarefas.shift()
// console.log(`\nPrimeiro item removido: "${primeiro}"`, 'Minha Lista agora:', minhaListaDeTarefas)
// Item removido: "mandar email" Minha Lista agora: [ 'colocar comida para o dog', 'limpar o quarto' ]

// remover um item específico a partir de um índice. splice(itemDeInicio, quantosRemover)
// minhaListaDeTarefas.splice(2, 1)
// console.log('\nRetirando o item "limpar o quarto"', minhaListaDeTarefas)

const itens = [1, 'computador', 0.22]
// verificar o tipo do array
// console.log(typeof (itens)) // object

// verificar se é array da forma correta
// console.log(Array.isArray(itens)) // true

const numeros = [3, 2, 1, 0]
const letras = ['d', 'c', 'b', 'a']
// ordenar
// console.log(
//   '\nNumeros:', numeros.sort(), // Numeros: [ 0, 1, 2, 3 ]
//   '\nLetras:', letras.sort() // Letras: [ 'a', 'b', 'c', 'd' ]
// )

// juntar dois arrays
// const novo = itens.concat([1, 2, 3])
// console.log('\nNOVO', novo)

// apresentar arrays em uma string
// console.log(minhaListaDeTarefas.join('-> ')) // mandar email-> colocar comida para o dog-> limpar o quarto-> formatar computador

// verificar indice do item
const index = itens.indexOf('computador')
const indexErrado = itens.indexOf('chaves')
console.log(index) // 1
console.log(indexErrado) // -1
console.log(itens[index]) // computador
console.log(itens[indexErrado]) // undefined
