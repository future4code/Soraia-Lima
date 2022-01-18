// 1 - a)  process.argv

// b)
// const nome = process.argv[2]
// const idade = Number(process.argv[3])

// if(nome && idade){
//     const frase = `Olá, ${nome}! Você tem ${idade} anos.`
//     console.log(frase)
    
// }else{
//     console.log("Por gentileza informar os dois parametros, nome e idade")
// }

// c)
const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = Number(idade + 7)

if(nome && idade){
const frase = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você tera ${novaIdade} anos`
console.log("\x1b[31m", frase) // para colocar cor no console
}else{
    console.log("\x1b[36m", "Por gentileza informar os dois parametros, nome e idade")
}