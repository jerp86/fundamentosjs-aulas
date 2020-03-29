// meses começam do ZERO!
// const dataAniversario = new Date(2020, 0, 20)
// console.log(dataAniversario) // 2020-01-20T03:00:00.000Z

// const primeiraDataDoJS = new Date(0)
// console.log(primeiraDataDoJS) // 1970-01-01T00:00:00.000Z

const hoje = new Date()
// console.log(hoje.toString()) // Mon Mar 23 2020 21:41:11 GMT-0300 (GMT-03:00)
// console.log(hoje.toLocaleDateString()) // 2020-3-23

// formato global recomendado!
// console.log(hoje.toISOString()) // 2020-03-24T00:42:17.663Z

// const dia = hoje.getDate()
// +5 dias depois de hoje
// hoje.setDate(dia + 5) // 2020-03-29T00:45:00.463Z
// console.log(hoje)

// acrescentar Hora, Minuto, Segundo, Milisegundo
// hoje.setHours(10, 30, 20, 40)
// console.log(hoje) // 2020-03-28T13:30:20.040Z

console.log(`
  Dia: ${hoje.getDate()}
  Mês: ${hoje.getMonth()}
  Ano: ${hoje.getFullYear()}
  Hora: ${hoje.getHours()}
  Minuto: ${hoje.getMinutes()}
  Segundo: ${hoje.getSeconds()}
`)
