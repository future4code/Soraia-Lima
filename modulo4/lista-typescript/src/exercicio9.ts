function fatorial(valor: string) {
    let contador = 1

    for (let i = valor.length; i > 1; i--) {
        contador *= i
    }
    return contador
}
console.log(fatorial("soraia"))