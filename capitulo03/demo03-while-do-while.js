// enquanto não mudar, não para!
let termoDeParada = true
let contador = 0

// verifica o termo de parada e depois executa
while (termoDeParada) {
  termoDeParada = contador < 10

  if (contador % 2 === 0) {
    console.log('Numero par', contador)
  }
  contador++
  // contador = contador + 1
  // contador += 1
}

// executa e depois verifica o termo de parada
do {
  console.log('Só uma vez! Pois o termoDeParada é', termoDeParada)
} while (termoDeParada)

while (termoDeParada) {
  // não vai executar
  console.log('Nem vai executar!!')
}
