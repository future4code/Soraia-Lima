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

// DESAFIO
// 1

// const num1 = Number(prompt("Vamos jogar!!\nInforme um número:"))
// let num2 = Number(prompt("Chute um número"))

// let i = 0
// while(num2 != num1){
//     if(num2 < num1){
//         console.log(`O número chutado foi ${num2} :(
//             Errou... O número escolhido é menor`)
//     }
//     else if(num2 > num1){
//         console.log(`O número chutado foi ${num2} :(
//             Errou... O número escolhido é maior`)
//     }
//  num2 = Number(prompt("Chute outro número"))
// i++
// }

// console.log(`Acertou!! O número de tentativas foi: ${i}`)

// 2

// alert("Vamos jogar!!")
// const num1 = Math.floor((Math.random() * 100) + 1)
// let num2 = Number(prompt("Chute um número"))

// let i = 0
// while (num2 != num1) {
//     if (num2 < num1) {
//         console.log(`O número chutado foi ${num2} :(
//             Errou... O número escolhido é menor`)
//     }
//     else if (num2 > num1) {
//         console.log(`O número chutado foi ${num2} :(
//             Errou... O número escolhido é maior`)
//     }
//     num2 = Number(prompt("Chute outro número"))
//     i++
// }

// console.log(`Acertou!! O número de tentativas foi: ${i}`)

// Não foi fácil, pois tive muita dificuldade em entender o conteúdo. 
// Mas pelo link que você deixaram, já tinha os exemplos de bibliotecas, para usarmos.




/*
if (valorUsuario <= 21){
    confirm("Quer comprar outra carta?")
    while(valorUsuario < valorComputador && valorComputador <= 21){
       jogadorUsuario.push(comprarCarta())
       jogadorUsuario.valor = 0
       jogadorUsuario.texto = ""
       for(let valorUsuario of valorUsuario){
          valorUsuario += valorUsuario
          jogadorUsuario.texto += jogadorUsuario.texto +""
       }
    }
 }
 */