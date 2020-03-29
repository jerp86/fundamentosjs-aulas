let variavelSemInicializacao
console.log(
  variavelSemInicializacao, // undefined
  typeof (variavelSemInicializacao) // undefined
)

variavelSemInicializacao = 'Hello World!!'
console.log(
  variavelSemInicializacao, // Hello World!!
  typeof (variavelSemInicializacao) // string
)

variavelSemInicializacao = null
console.log(
  variavelSemInicializacao, // null
  typeof (variavelSemInicializacao) // object
)
