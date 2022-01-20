// a)
const minhaString: string = "oi"
console.log(minhaString)

// b)
const meuNumero: number = 7
console.log(meuNumero)

//c)
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

// d)
enum Cores {
    VERMELHA = "vermelha",
    LARANJA = "Laranja",
    AMARELO = "Amarela",
    VERDE = "Verde",
    AZULESCURO = "Azul Escuro",
    ROXA = "Roza"
}

const pessoa1: Pessoa = {
    nome: "Soraia",
    idade: 24,
    corFavorita: Cores.AMARELO
}

const pessoa2: Pessoa = {
    nome: "Douglas",
    idade: 30,
    corFavorita: Cores.AZULESCURO
}

const pessoa3: Pessoa = {
    nome: "Maria",
    idade: 54,
    corFavorita: Cores.LARANJA
}

console.log(pessoa1, pessoa2, pessoa3)
