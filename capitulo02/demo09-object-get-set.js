const pessoa = {
  _nome: '',
  _idade: 20,
  get nome() {
    return this._nome
  },
  set nome(valor) {
    this._nome = valor.toUpperCase()
  },

  get podeDirigir() {
    return this._idade > 18
  },
  set idade(valor) {
    this._idade = valor
  }
}

pessoa.nome = 'maria do céu'
console.log(pessoa.nome) // MARIA DO CÉU

console.log(pessoa.podeDirigir) // true

pessoa.idade = 16
console.log(pessoa.podeDirigir) // false
console.log(pessoa.idade) // undefined
