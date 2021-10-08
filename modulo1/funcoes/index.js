// Exercícios de interpretação de código
//1.
//a) 10 e 50
//b) Iria executar o comando da mesma forma, porém não iria aparecer nada no console, para que seja possivel verificar o resultado. 

//2.
//a) 1º Ela recebe um texto do usuário
//   2º Ela vai retornar o texto com todas as letras minúsculas.
//   3º Ela vai verficar se a palavra "cenoura" está presente na frase, retornando o valor true ou false.
//b) i- eu gosto de cenoura, true
//  ii- cenoura é bom pra vista, true
// iii- cenouras crescem na terra, true

// Exercícios de escrita de código
//1.
//a)
// function imprimirDados () {
//     console.log("Eu sou Soraia, tenho 24 anos, moro em Goiás e sou estudante da Labenu.")
// }
// imprimirDados ()

//b) 
// function imprimirDados () {
//     const nome = prompt("Infome seu nome:")
//     const idade = Number(prompt("Informe sua idade:"))
//     const cidade = prompt("Informe seu endereço:")
//     const profissao = prompt("Informe sua profissão:")
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }
// imprimirDados ()

// 2.
// a) 
// function imprimirResultado (numero1, numero2){
//     const soma = numero1 + numero2
//     return soma
// }
// const resultado = imprimirResultado(10, 8)
// console.log(resultado)

//b)
// function receberNumeros (numero1, numero2){
//     const boolean = numero1 >= numero2
//     return boolean
// }
// const resultado = receberNumeros(25, 18)
// console.log(resultado)
 
//c)
// function receberNumero (numero1){
//     const parOuImpar = numero1 % 2 === 0
//     return parOuImpar
// }
// const resultado = receberNumero (17)
// console.log(resultado)

//d)
// function receberMensagem(texto) {
//     texto = "Boa tarde! Como vai?"
//     const tamanho = texto.length
//     const maiuscula = texto.toUpperCase()
//     console.log("O tamanho do texto é:", tamanho,".", maiuscula)
// }
//  receberMensagem ()

/* 3.
const numero1 = Number(prompt("Informe o primeiro numero :"))
const numero2 = Number(prompt("Informe o segundo número"))
function somar (numero1, numero2){
    const soma = numero1 + numero2
    return soma
}
function subtracao (numero1, numero2){
    const diferenca = numero1 - numero2
    return diferenca
}
function mutiplicar (numero1, numero2){
    const mutiplicacao = numero1 * numero2
    return mutiplicacao
}
function dividir (numero1, numero2){
    const divisao = numero1 / numero2
    return divisao
}
console.log("Os números inderidos são:", numero1, "e", numero2)
console.log("Soma:", somar(numero1, numero2))
console.log("Diferença:", subtracao(numero1, numero2))
console.log("Mutiplicação:", mutiplicar(numero1, numero2))
console.log("Divisão:", dividir(numero1, numero2))
*/

//DESAFIO
/*1.

const receberMensagem = (parametro) => {
console.log(parametro)
}
const receberValores = (valor1, valor2) => {
    valor1 = 10
    valor2 = 20
   const soma = valor1 + valor2 
receberMensagem(soma)
}
receberValores()
*/

//2
function calcularHipotenusa(num1, num2){
    num1 = 6
    num2 = 10
    const hipotenusa = (num1*num1) + (num2*num2)
    const resultadoHipotenusa = hipotenusa **(1/2)
    return resultadoHipotenusa
}
const teorema = calcularHipotenusa
console.log("O valor da hipotenusa é:",calcularHipotenusa(teorema))
