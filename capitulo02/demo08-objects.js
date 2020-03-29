const heroi = {
  nome: 'Flash',
  idade: 100,
  sexo: 'Masculino'
}

// console.log('Nome', heroi.nome) // Nome Flash
// console.log('idade', heroi['idade']) // idade 100
// console.log('sexo', heroi.sexo) // sexo Masculino
// console.log('naoExiste', heroi.naoExiste) // naoExiste undefined

// alterando a instancia do heroi com nova chave
// heroi.id = 0001
// console.log('Heroi', heroi) // Heroi { nome: 'Flash', idade: 100, sexo: 'Masculino', id: 1 }

// saber chaves do objeto
// console.log(Object.keys(heroi)) // [ 'nome', 'idade', 'sexo' ]

// saber valores
// console.log(Object.values(heroi)) // [ 'Flash', 100, 'Masculino' ]

const pessoa = {
  tamanho: '10 metros'
}
// juntar dois objetos
const novoObj = Object.assign(heroi, pessoa)
console.log(novoObj) // { nome: 'Flash', idade: 100, sexo: 'Masculino', tamanho: '10 metros' }

delete novoObj.nome
console.log(novoObj) // { idade: 100, sexo: 'Masculino', tamanho: '10 metros' }
