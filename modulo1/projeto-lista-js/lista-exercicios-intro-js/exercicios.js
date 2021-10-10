// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
// function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
//   altura = Number(prompt("Informe a altura do retângulo:"))
//   largura = Number(prompt("Informe a largura do retângulo:"))
//   console.log(altura * largura)
// }
//console.log(calculaAreaRetangulo())

// EXERCÍCIO 02
// function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
//   anoAtual = Number(prompt("Informe o ano atual:"))
//   anoNascimento = Number(prompt("Informe o seu ano de nascimento:"))
//   console.log(anoAtual - anoNascimento) 
// }
//console.log(imprimeIdade())

// EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   // implemente sua lógica aqui
//   return imc = peso / (altura*altura)
//  }
// const resultado = calculaIMC(57, 1.55)
// console.log(calculaIMC(57, 1.55))

// EXERCÍCIO 04
// function imprimeInformacoesUsuario(nome, idade, email) {
//   // implemente sua lógica aqui
//   // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
// nome = prompt("Iforme seu nome:")
// idade = Number(prompt("Iforme sua idade:"))
// email = prompt("Informe seu email")
// console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
// }
// console.log(imprimeInformacoesUsuario())

// EXERCÍCIO 05
// function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
// cor1 = prompt("Informe sua primeiro cor favorita:")
// cor2 = prompt("Informe sua segunda cor favorita:")
// cor3 = prompt("Informe sua terceira cor favorita:")
// console.log([cor1, cor2, cor3])
// }
// console.log(imprimeTresCoresFavoritas())

// EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui  
//  return maiscula = string.toUpperCase() 
// }
// const fraseMaiuscula = retornaStringEmMaiuscula("oi")
// console.log(retornaStringEmMaiuscula("oi"))

// EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
// const ingressosASeremVendidos = custo / valorIngresso
// return ingressosASeremVendidos
// }
// const quantidadeDeIgressos = calculaIngressosEspetaculo(1000, 50)
// console.log(calculaIngressosEspetaculo(1000, 50))

// EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
// const tamanho = string1.length === string2.length
// return tamanho
// }
// const oTamanhoEIgual = checaStringsMesmoTamanho("Olá", "Olá")
// console.log(checaStringsMesmoTamanho("Olá", "Olá"))

// EXERCÍCIO 09
// function retornaPrimeiroElemento(array) {
//   // implemente sua lógica aqui
// return array[0]
//}

// EXERCÍCIO 10
// function retornaUltimoElemento(array) {
//   // implemente sua lógica aqui
//  return array[array.length-1]
// }

// EXERCÍCIO 11
// function trocaPrimeiroEUltimo(array) {
//   // implemente sua lógica aqui
// const indicePrimeiro = array[0] 
// const ultimoIndice = array[array.length-1] 
// array[0] = ultimoIndice
// array[array.length-1]  = indicePrimeiro
// return array
// }

// EXERCÍCIO 12
// function checaIgualdadeDesconsiderandoCase(string1, string2) {
//   // implemente sua lógica aqui
// const primeiraString = string1.toUpperCase()
// const segundaString = string2.toUpperCase()
// const comparacao = primeiraString === segundaString
// return comparacao
//}

// EXERCÍCIO 13
// function checaRenovacaoRG() {
//   // implemente sua lógica aqui
// const anoAtual = Number(prompt("Informe o ano atual:"))
// const anoNascimento = Number(prompt("Infome seu ano de nascimento:"))
// const anoRg = Number(prompt("Informe o ano de expedição do seu RG:"))

// const primeiraCondicao = ((anoAtual-anoNascimento)<= 20) && ((anoAtual-anoRg)>= 5)
// const segundaCondicao = ((anoAtual-anoNascimento)> 20 && (anoAtual-anoNascimento) <= 50) && ((anoAtual-anoRg)>= 10)
// const terceiraCondicao = ((anoAtual-anoNascimento)> 50) && ((anoAtual-anoRg)>= 15)

// console.log(primeiraCondicao || segundaCondicao || terceiraCondicao)
// }
// console.log(checaRenovacaoRG())

// // EXERCÍCIO 14
//   function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui
// const multiplo400 = (ano % 400) === 0
// const multiplo4 = (ano % 4) === 0 
// const multiplo100 = (ano % 100) === 0 
// return multiplo400 || (multiplo4 && !multiplo100)

// }

// // EXERCÍCIO 15
// function checaValidadeInscricaoLabenu() {
//    // implemente sua lógica aqui
// const idade = prompt("Você tem mais de 18 anos? Sim ou Não")
// const ensinoMedio = prompt("Você possui mais de 18 anos? Sim ou Não")
// const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? Sim ou Não")
// const pergunta1 = idade === "sim"
// const pergunta2 = ensinoMedio === "sim"
// const pergunta3 = disponibilidade ==="sim"
// console.log(pergunta1 && pergunta2 && pergunta3)

//  }