/* Exercícios de interpretação de código
1.
a) False
b) False
c) True
d) Boolean
2. Sim. Sera impresso a concatenação dos números inseridos, visto que eles estão na forma de string. 
3. Para que seja efetuada a soma dos números digitados pelo usuário, deve ser inserido o Number() na frente da soma do primeiroNumero e do segundoNumero. 
*/

//Exercícios de escrita de código

// 1. 
/*
const idadeUsuario = Number(prompt("Informe sua idade:"))
const idadeMelhorAmigo = Number(prompt("Informe a idade do seu melhor amigo(a)"))

console.log("Sua idade é maior do que do seu amigo(a)", idadeUsuario > idadeMelhorAmigo)
console.log ("A diferença de idade entre vocês é:", idadeUsuario - idadeMelhorAmigo)
*/

//2.

// let numeroPar = prompt ("Informe um número par:")
// let resposta = Number(numeroPar) % 2

// console.log ("O resto da divisão do", numeroPar, "por 2 é:", resposta)
// c) o resto da davisão sempre é zero.
// d) a divisão terá resto. 

//3.
// const idadeUsuario = Number(prompt("Quantos anos você tem?"))
// const idadeMeses = idadeUsuario * 12
// const idadeDias = idadeUsuario * 365
// const idadeHoras = idadeUsuario * 8760

// console.log ("Sua iades em meses é:", idadeMeses)
// console.log("Sua idade em dias é:", idadeDias)
// console.log("Sua idade em horas é:", idadeHoras)

/*4.

const numero1 = Number(prompt ("Informe o primeiro número"))
const numero2 = Number(prompt ("Informe o segundo número"))
const resultado1 =  numero1 % numero2
const resultado2 =  numero2 % numero1

console.log ("O primeiro numero é maior que segundo?", numero1 > numero2)
console.log ("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log ("O primeiro numero é divisível pelo segundo?", resultado1 === 0) 
console.log ("O segundo numero é divisível pelo primeiro?", resultado2 === 0) 
*/

/* Desafio
1.

let temp1F = 77
let temp1FemK = (77 - 32) * (5/9) + 273.15
let temp2C = 80
let temp2CemF = 80 * (9/5) + 32
let temp3C = 30
let temp3CemF = 30 * (9/5) + 32
let temp3CemK = 30 + 273.15
let temp4C = Number(prompt("Insira uma temperatura em grau Celsius para a conversão em Fahrenheit e Kelvin:"))
let temp4CemK = temp4C + 273.15
let temp4CemF = temp4C * (9/5) + 32

console.log("A temperatura 77ºF em Kelvin é:", temp1FemK,"K")
console.log("A temperatura 80ºC em Fahrenheit é:", temp2CemF,"F")
console.log("A temperatura 30ºC em Fahrenheit é:", temp3CemF,"F",".", "E em Kelvin é:", temp3CemK)
console.log ("A temperatura", temp4C,"ºC em Fahrenheit é:", temp4CemF,"F",".", "E em Kelvin é:", temp4CemK)
*/

/*2.

let consumoEnergia1 =prompt ("Informe a quantidade de quilowatts consumida em sua residência", 280)
let valorPagar = (Number(consumoEnergia1) * 0.05) * 30
let valorComDesconto = Number(valorPagar) - (Number(valorPagar) * 0.15) 

console.log ("O valor da sua conta de luz será:", valorPagar)
console.log ("O valor da sua conta de luz, com 15% de desconto será:", valorComDesconto)
*/

/*3

a.
let a = 20 / 2.205

console.log ("20lb equivalem a",a,"kg")

b.
let b = 10.5 / 3.527

console.log("10.5oz equivalem a",b,"kg")

c.
let c = 100 * 1609

console.log("100mi equivalem a",c,"m")

d.
let d = 50 / 3.281

console.log("50ft equivalem a",d,"m")

e.
let e = 103.56 * 379

console.log("103.56gal equivalem a",e,"l")

 f.
let f = 450 / 3.52

console.log("450 xic equivalem a",f,"l")

g.
let g = prompt("Informe a quantidade de xícaras para conversão em litros:")
let g1 = Number(g) / 3.52

console.log("A",g,"xic equivalem a",g1,"l")
*/


