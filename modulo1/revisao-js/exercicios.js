// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function comparaNumeros(a, b) {
        return a - b;
    }
    return array.sort(comparaNumeros)
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const novoArray = array.filter((numero) => {
        return (numero % 2 === 0)
    })
    return novoArray
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let paresElevadosADois = []
    for (let num of retornaNumerosPares(array)) {
        num = num ** 2
        paresElevadosADois.push(num)
    }
    return paresElevadosADois
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for (let numero of array) {
        if (numero > maior) {
            maior = numero
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor

    if (num1 < num2) {
        maior = num2
        menor = num1
    } else {
        maior = num1
        menor = num2
    }

    let objeto = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor === 0,
        diferenca: maior - menor
    }

    return objeto
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    let numero = n
    let cont = 0
    for (i = 0; i < numero; i++) {
        array.push(cont)
        cont = cont + 2
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    }
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    }
    else {
        return "Escaleno"
    }
}
    // EXERCÍCIO 10
    function retornaSegundoMaiorESegundoMenor(array) {

    }

    // EXERCÍCIO 11
    function retornaChamadaDeFilme(filme) {

        return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
    }

    // EXERCÍCIO 12
    function retornaPessoaAnonimizada(pessoa) {
        
    }

    // EXERCÍCIO 13A
    function retornaPessoasAutorizadas(pessoas) {

    }

    // EXERCÍCIO 13B
    function retornaPessoasNaoAutorizadas(pessoas) {

    }

    // EXERCÍCIO 14
    function retornaContasComSaldoAtualizado(contas) {

    }

    // EXERCÍCIO 15A
    function retornaArrayOrdenadoAlfabeticamente(consultas) {

    }

    // EXERCÍCIO 15B
    function retornaArrayOrdenadoPorData(consultas) {

    }


