// 2- a)
// selecionar o tipo de função e passar dois numeros para que a mesma seja executada
const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

if(operacao && numero1 && numero2){
    switch (operacao) {
        case "soma":
            return console.log(`A soma dos dois números é ${numero1 + numero2}`);
        case "subtracao": 
            return console.log(`A subtração do primeiro número pelo segundo é ${numero1 - numero2}`);
        case "multiplicacao":
            return console.log(`O resultado da mutiplicação do primeiro número pelo segundo é ${numero1 * numero2}`);
        case "divisao":
            return console.log (`O resultado da divisao do primeiro número pelo segundo é ${numero1 / numero2}`);
        default:
            return console.log("opção invalida, digite : soma, subtracao, mutiplicacao ou divisao.")
    }
}else{
    console.log("Por gentileza, informar a  operacao desejada, o primeiro e segundo numero")
}
