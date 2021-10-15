// Exercícios de interpretação de código
// 1. Ele vai incrementar um valor, até atingir o a posição 5. Sera impresso no console 10.
// 2 a) Os números 19, 21, 23, 25, 27, 30 visto que são maiores que 18.
// b) Acredito que sim. Teríamos "numero = lista[1]" "console.log(numero)"
// 3. Començando por 0 *, até  ****. 

// Exercícios de escrita de código
// 1.
// const animais = Number(prompt("Informe a quantidade de animais de estimação que você possui:"))
// let quantidadeAnimais = 0

// if (animais > 0) {
//     let pets = []
//     for (let i = 0; i < animais; i++) {
//         pets.push(prompt("Informe o nome do seu bichinho:"))
//     }
//     console.log(pets)
//     quantidadeAnimais++
// }
// else {
//     console.log("Que pena! Você pode adotar um pet!")
// }
//2.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// function imprimirArray() {
//     for (let num of arrayOriginal) {
//         console.log(num)
//     }
// }
// imprimirArray()

// //b

// function imprimirDivisao() {
//     for (let num1 of arrayOriginal) {

//         console.log(num1 / 10)
//     }
// }
// imprimirDivisao()

//c

// let imprimirPar = []

// for (let num2 of arrayOriginal) {
//     if (num2 % 2 === 0) {
//         imprimirPar.push(num2)
//     }
// }
// console.log(imprimirPar)

// d
// let index = []
// i = 0
// for (let num3 of arrayOriginal) {
//     const posicao = arrayOriginal.indexOf(num3)
//     console.log(`O elemento do index ${posicao} é:${num3} `)
// }

// e

// function imprimirMaior() {
//     let maior = arrayOriginal[0]

//     for (let i = 0; i < arrayOriginal.length; i++) {
//         if (arrayOriginal[i] > maior) {
//             maior = arrayOriginal[i]
//         }
//     }
//     return maior
// }

// const maiorArray = imprimirMaior(arrayOriginal)

// function imprimirMenor() {
//     let menor = arrayOriginal[0]

//     for (let i = 0; i < arrayOriginal.length; i++) {
//         if (arrayOriginal[i] < menor) {
//             menor = arrayOriginal[i]
//         }
//     }
//     return menor
// }

// const menorArray = imprimirMenor(arrayOriginal)

// console.log(`O maior número é ${maiorArray} e o menor é ${menorArray}`)

