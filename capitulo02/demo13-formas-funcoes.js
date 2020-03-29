function minhaFuncao1(parametro1) {
  return console.log(`aeeee ${parametro1}`)
}

const minhaFuncao2 = function (parametro1) {
  return console.log(`aeeee ${parametro1}`)
}

const minhaFuncao3 = (parametro1) => {
  return console.log(`aeeee ${parametro1}`)
}

const minhaFuncao4 = parametro1 => {
  return console.log(`aeeee ${parametro1}`)
}

const obj1 = {
  minhaFuncao: parametro1 => console.log(`aeeee ${parametro1}`)
}
obj1.minhaFuncao('test')

const obj2 = {
  minhaFuncao(parametro1) {
    console.log(`aeeee ${parametro1}`)
  }
}
obj2.minhaFuncao('test')
