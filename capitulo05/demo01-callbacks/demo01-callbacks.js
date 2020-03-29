const fs = require('fs')

// fs.readFile('./arq1.txt', (erro, resposta) => {
//   if (erro) {
//     return console.error('Deu ruim***', erro.stack)
//   }

//   console.log('resposta', resposta.toString())
// })

fs.readFile('./arq1.txt', (erroArq1, respostaArq1) => {
  if (erroArq1) {
    return console.error('Deu ruim no arq1', erroArq1)
  }

  fs.readFile('./arq2.txt', (erroArq2, respostaArq2) => {
    if (erroArq2) {
      return console.error('Deu ruim no arq2', erroArq2)
    }

    fs.readFile('./arq3.txt', (erroArq3, respostaArq3) => {
      if (erroArq3) {
        return console.error('Deu ruim no arq3', erroArq3)
      }

      const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`
      // console.log(conteudo)
      fs.writeFile('./final.txt', conteudo, (erroWrite, respostaWrite) => {
        if (erroWrite) {
          return console.error('Deu ruim na gravação', erroWrite)
        }

        console.log('Arquivo salvo com sucesso!!')
      })
    })
  })
})
