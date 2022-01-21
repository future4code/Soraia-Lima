enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type retorno = {
    nome: string,
    lancamento: number,
    genero: GENERO,
    pontuacao?: number
}


function imprimirFilme(filme: retorno):object {
    return filme
}
console.log(imprimirFilme({ nome: "John Wick – De Volta ao Jogo", lancamento: 2014, genero: GENERO.ACAO }))
console.log(imprimirFilme({ nome: "Thor: Ragnarok", lancamento: 2017, genero: GENERO.ACAO, pontuacao: 100 }))
