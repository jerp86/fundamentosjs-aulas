class Heroi {
  atacar() {
    console.log('Atacou!!')
  }

  defender() {
    console.log('Defendeu')
  }
}

const heroi = new Heroi()
heroi.atacar() // Atacou!!
heroi.defender() // Defendeu

// usando contrutor
class Heroi2 {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  atacar() {
    console.log(`O ${this.nome} atacou!!`)
  }
}
const heroi2 = new Heroi2('Flash', 80)
heroi2.atacar() // O Flash atacou!!

// Funções Helpers / Funções Uteis
class Heroi3 {
  static obterAnoNascimento(idade) {
    return 2020 - idade
  }
}

const anoNascimento = Heroi3.obterAnoNascimento(19)
console.log(`O ano de nascimento do Heroi é ${anoNascimento}`) // O ano de nascimento do Heroi é 2001
