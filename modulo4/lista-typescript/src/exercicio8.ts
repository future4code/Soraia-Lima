// function renovacaoRG(nascimento: string, emissaoRG: string): boolean {

//     const dataAtual:number = new Date().getTime()


//     const idade = dataAtual - nascimento
//     const tempoRG = dataAtual - emissaoRG

//     const condicao1 = idade <= 20 && tempoRG >= 5
//     const condicao2 = (idade > 20 && idade <= 50) && tempoRG >= 10
//     const condicao3 = idade > 50 && tempoRG >= 15

//     return condicao1 || condicao2 || condicao3

// }

// ERADOOOOOOOOOOOOOOOOOOOOOOOOOO

function novaData (data: string){
    Date.parse(data)

}
console.log(novaData("17/02/1997"))



// console.log(renovacaoRG("17/02/1997", "02/10/2020"))
