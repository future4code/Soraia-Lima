type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b // ordena os numeros
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([50, 20]))

// a) Entradas: um array de numeros,  a saída é um objeto, com o maior, menor, e média dos números.
// b) numerosOrdenados = array de numeros, soma = numero, estatisticas = obejto.
// c) 
type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatisticas
}

const amostraDeIdades: AmostraDeDados = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))
