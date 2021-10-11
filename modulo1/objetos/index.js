// Exercícios de interpretação de código
// 1.
// i) Mathues Nachtergaele
// ii) Virginia Cavendish
// iii) "Globo", horario: "14h"

//2. 
// a) 
// i) Juca, 3, SRD 
// i) Juba, 3, SRD 
// iii) Jubo, 3, SRD 
// b) realiza uma cópia do objeto. 

// 3.
// a) 
// i) false
// ii) undefined 
// b) no primeiro saiu o valor do backender, e no saiu undefined, pois não existe o obejto "altura".

// Exercícios de escrita de código
// 1.

// const pessoa = {
// nome: "Soraia",
// apelidos: ["Soso",  "Bubu",  "Baby"]
// }
// function imprimir(pessoa) {
//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou  ${pessoa.apelidos[2]}.`)
//     return pessoa
// }
// console.log(imprimir(pessoa))
 
// const novosApelidos = {
//     ...pessoa, apelidos:["Lindinha", "Florzinha", "Docinho"]
// }
// console.log(imprimir(novosApelidos))

//2.
// const dados = [ 
//     {
//         nome: "Soraia",
//         idade: 24, 
//         profissao: "estudante"
//         },
//     {
//         nome: "Douglas",
//         idade: 30,
//         profissao: "carteiro"
//     }
// ]   
// function impressao(dados) {
//     const caractereNome1 = dados[1].nome.length
//     const caractereProfissao1 = `${dados[0].nome.length}`

//     console.log([dados[0].nome, dados[0].nome.length, dados[0].idade, dados[0].profissao, dados[0].profissao.length])
//     console.log([dados[1].nome, caractereNome1, dados[1].idade, dados[1].profissao, caractereProfissao1])    
    
//     return impressao
// }
// console.log(impressao(dados))

//3.
// const carrinho = []

// const fruta1 = {
//     nome:"Uva",
//     disponibilidade: true
//     }
// const fruta2 = {
//     nome:"Morango",
//     disponibilidade: true
//     }
// const fruta3 = {
//     nome:"Banana",
//     disponibilidade: true
//     }
// function sacolao(fruta) {
//     fruta = carrinho.push(fruta)
// }

// sacolao(fruta1)
// sacolao(fruta2)
// sacolao(fruta3)

// console.log(carrinho)

// DESAFIO
// 1.
// function imprimirDados () {
//     const dados = {
//     nome: prompt("Informe se nome:"),
//     idade: Number(prompt("Informe sua idade:")),
//     profissao: prompt("Informe sua profissão:")
//     }
//     console.log(dados)
//     console.log(typeof dados)
// }

// imprimirDados()

// 2.
function imprimirFilmes () {
    const filme1 = {
        anoDeLançamento: 2017,
        nome: "Thor - Ragnarok"
        }
    const filme2 = {
        anoDeLançamento: 2014,
        nome: "Malévola"
        }
        const anoAntes = (filme1.anoDeLançamento < filme2.anoDeLançamento)
        const anoLancamento = (filme1.anoDeLançamento === filme2.anoDeLançamento)
        console.log(`O primeiro filme foi lançado antes do segundo? ${anoAntes}`)
        console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${anoLancamento}`)
    }
imprimirFilmes()

