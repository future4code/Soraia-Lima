// Exercícios de interpretação de código
//1.
// a) 1º recebe um numero do usuário. 2º Se o resto da divisão desse número, por 2, for igual 0, 
// retorna o que se encontra no IF, caso contrario no ELSE.
// b) Números pares
// c) Npumeros impares.

// 2.
// a) O switch é usado paar simplificar codigos. O usuário informa uma fruta, e esse cógico mostra o valor correspondente dessa fruta.
// b) O preço da fruta Maçã é R$ 2.25.
// c) O preço da fruta Pêra é R$ 5, pois ele atribuiu o preço do default.

// 3)
// a) Foi criado uma constante para receber um número do usuário.
// b) Se o número fosse 10:  Esse número passou no teste. 
// Se fosse -10: nada, visto que não temos nenhuma condição para numero menor que 0.
// c) Sim, pois a let mensagem, está dento da estrutura IF, e só pode ser accessada la.

// Exercícios de escrita de código

/* 1.
const idade = Number(prompt("Informe sua idade"))

if (idade >= 18){
    console.log("Você pode dirigir")
}
else{ 
    console.log("Você não pode dirigir")
}
*/

/* 2.
const turno = prompt("Informe o turno que você estuda: M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

if (turno === "M"){
    console.log("Bom Dia!")
}
else if (turno === "V") {
    console.log("Boa Tarde!")
}
else  {
    console.log("Boa Noite!")
}*/

/* 3.
const turno = prompt("Informe o turno que você estuda: M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()
switch (turno) {
    case "M":
    console.log("Bom Dia!")   
    break
    case "V":
    console.log("Boa Tarde!")  
    break
    case "N":
    console.log("Boa Noite!")
    break
    default:
    console.log("Informe um turno correto: M (matutino) ou V (Vespertino) ou N (Noturno)")
    break
}*/

/* 4.
const genero = prompt("Informe o gênero do filme que vamos assistir:").toUpperCase()
const preco = Number(prompt("Informe o preço do ingresso:"))

if(genero === "fantasia" && preco <= 15){
    console.log("Bom filme!")
}
else {
    console.log("Escolha outro filme :(")
}*/

// DESAFIO
/* 1.
const genero = prompt("Informe o gênero do filme que vamos assistir:").toLowerCase()
const preco = Number(prompt("Informe o preço do ingresso:"))
const lanche = prompt("Informe o lanchinho que você vai comprar:").toLowerCase()

if(genero === "fantasia" && preco <= 15){
    console.log(`Bom filme! \n Aproveite o seu ${lanche}!`)
}
else {
    console.log("Escolha outro filme :(")
}*/

// 2.
const nome = prompt("Informe seu nome completo:")
const tipoJogo = prompt("Informe o tipo de jogo que deseja assistir: IN indica internacional; e DO indica doméstico").toUpperCase ()
const etapaJogo = prompt("Informe a estapa do jogo que deseja assistir: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase ()
const categoria = Number(prompt("Informe a categoria do jogo: 1, 2, 3 ou 4"))
const quantidade = Number(prompt("Informe a quantidade de ingressos que deseja comprar:"))

console.log("----Dados da compra---")
console.log(`Nome do cliente: ${nome}`)
console.log(`Tipo de jogo: ${tipoJogo}`)
console.log(`Etapa do jogo: ${etapaJogo}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de ingressos: ${quantidade}`)
console.log('----Valores----')

if(tipoJogo==="DO"){
switch (etapaJogo === "SF" || etapaJogo === "DT" || etapaJogo === "FI") {
    case etapaJogo === "SF" && categoria === 1:
    console.log(`Valor do ingresso: R$ 1320
    Valor total R$:`, 1320 * quantidade)
    break
    case etapaJogo === "SF" && categoria === 2:
    console.log(`Valor do ingresso: R$ 880
    Valor total R$:`, 880 * quantidade)
    break
    case etapaJogo === "SF" && categoria === 3:
    console.log(`Valor do ingresso: R$ 550
    Valor total R$:`, 550 * quantidade)
    break
    case etapaJogo === "SF" && categoria === 4:
    console.log(`Valor do ingresso: R$ 220
    Valor total R$:`, 220 * quantidade)
    break
    case etapaJogo === "DT" && categoria === 1:
    console.log(`Valor do ingresso: R$ 880
    Valor total R$:`, 660 * quantidade)
    break
    case etapaJogo === "DT" && categoria === 2:
    console.log(`Valor do ingresso: R$ 440
    Valor total R$:`, 440 * quantidade)
    break
    case etapaJogo === "DT" && categoria === 3:
    console.log(`Valor do ingresso: R$ 330
    Valor total R$:`, 330 * quantidade)
    break
    case etapaJogo === "DT" && categoria === 4:
    console.log(`Valor do ingresso: R$ 170
    Valor total R$:`, 170 * quantidade)
    break
    case etapaJogo === "FI" && categoria === 1:
    console.log(`Valor do ingresso: R$ 1980
    Valor total R$:`, 1980 * quantidade)
    break
    case etapaJogo === "FI" && categoria === 2:
    console.log(`Valor do ingresso: R$ 1320
    Valor total R$:`, 1320 * quantidade)
    break
    case etapaJogo === "FI" && categoria === 3:
    console.log(`Valor do ingresso: R$ 880
    Valor total R$:`, 880 * quantidade)
    break
    case etapaJogo === "FI" && categoria === 4:
    console.log(`Valor do ingresso: R$ 330
    Valor total R$:`, 330 * quantidade)
    break
    default:
    console.log("Informe a categoria correta")
    break
}
}
else if(tipoJogo==="IN") {
switch (etapaJogo === "SF" || etapaJogo === "DT" || etapaJogo === "FI") {
    case etapaJogo === "SF" && categoria === 1:
    console.log(`Valor do ingresso: R$ ${(1320 * 4.10)}
    Valor total R$:`, (1320 * 4.10) * quantidade)
    break
    case etapaJogo === "SF" && categoria === 1:
    console.log(`Valor do ingresso: R$ ${(880 * 4.10)}
    Valor total R$:`, (880 * 4.10) * quantidade)
    break
    case etapaJogo === "SF" && categoria === 1:
    console.log(`Valor do ingresso: R$ ${(550 * 4.10)}
    Valor total R$:`, (550 * 4.10) * quantidade)
    break
    case etapaJogo === "SF" && categoria === 1:
    console.log(`Valor do ingresso: R$ ${(220 * 4.10)}
    Valor total R$:`, (220 * 4.10) * quantidade)
    break
    case etapaJogo === "DT" && categoria === 1:
    console.log(`Valor do ingresso: R$ ${(620 * 4.10)}
    Valor total R$:`, (620 * 4.10) * quantidade)
    break   
    case etapaJogo === "DT" && categoria === 2:
    console.log(`Valor do ingresso: R$ ${(440 * 4.10)}
    Valor total R$:`, (440 * 4.10) * quantidade)
    break
    case etapaJogo === "DT" && categoria === 3:
    console.log(`Valor do ingresso: R$ ${(330 * 4.10)}
    Valor total R$:`, (330 * 4.10) * quantidade)
    break      
    case etapaJogo === "DT" && categoria === 4:
    console.log(`Valor do ingresso: R$ ${(170 * 4.10)}
    Valor total R$:`, (170 * 4.10) * quantidade)
    break   
    case etapaJogo === "FI" && categoria === 1:
    console.log(`Valor do ingresso: R$ ${(1980 * 4.10)}
    Valor total R$:`, (1980 * 4.10) * quantidade)
    break 
    case etapaJogo === "FI" && categoria === 2:
    console.log(`Valor do ingresso: R$ ${(1320 * 4.10)}
    Valor total R$:`, (1320 * 4.10) * quantidade)
    break 
    case etapaJogo === "FI" && categoria === 3:
    console.log(`Valor do ingresso: R$ ${(880 * 4.10)}
    Valor total R$:`, (880 * 4.10) * quantidade)
    break 
    case etapaJogo === "FI" && categoria === 4:
    console.log(`Valor do ingresso: R$ ${(330 * 4.10)}
    Valor total R$:`, (330 * 4.10) * quantidade)
    break 
    default:
    console.log("Informe a categoria correta")
    break
}
}