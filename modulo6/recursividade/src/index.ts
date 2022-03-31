// Exercício 1
//a
function imprimirCrescente(n: number) {
    if (n >= 0) {
        imprimirCrescente(n - 1)
        console.log(n, "cresce")
    }
}

//imprimirCrescente(5)

//b

function imprimirDecrescente(n: number) {
    if (n >= 0) {
        console.log(n, 'diminui')
        imprimirDecrescente(n - 1)
    }
}
//imprimirDecrescente(5)

// Exercício 2

function calcularNumeros(n: number, condicao: number = 0): number {
    if (n === 0) {
        return condicao
    }

    return n + calcularNumeros(condicao + n - 1)
}
//console.log(calcularNumeros(5))

// Exercício 3
function calcularNumerosIterativamente(n: number): number {

    let soma = 0
    for (let i = 0; i <= n; i++) {
        soma += i
    }
    return soma
}
//console.log(calcularNumerosIterativamente(5))

// Exercício 4
function imprimirElelmentosArray(array: string[], index: number =  array.length -1 ) {
    if (index >= 0) {
        imprimirElelmentosArray(array, index - 1)
        console.log(array[index])
    }
}

imprimirElelmentosArray(["Abacaxi", "Laranja", "Banana", "Kiwi"])