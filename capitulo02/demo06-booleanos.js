let podeDirigir = false
if (podeDirigir) {
  console.log('Ela pode dirigir')
}

podeDirigir = true
if (podeDirigir) {
  console.log('Agora sim, ela pode dirigir')
}

const saldoEmConta = 0
if (!saldoEmConta) {
  console.log('Não tem saldo!')
}

const boolComString = 'ae hackerzão!!'

// força o valor com a true ou false de acordo com a tabela
console.log('boolComString', !!boolComString) // boolComString true

// negação
console.log('negação', !boolComString) // negação false

// negação + forçar a bool
console.log(
  'negação + forçar a bool',
  !(!!boolComString) // negação + forçar a bool false
)
