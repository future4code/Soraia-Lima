// 2- a)
// selecionar o tipo de função e passar dois numeros para que a mesma seja executada
const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

if(operacao && numero1 && numero2){
    switch (operacao) {
        case "soma":
            return console.log("\x1b[31m", `A soma dos dois números é ${numero1 + numero2}`);
        case "subtracao": 
            return console.log("\x1b[32m",`A subtração do primeiro número pelo segundo é ${numero1 - numero2}`);
        case "multiplicacao":
            return console.log("\x1b[44m\x1b[30m", `O resultado da mutiplicação é ${numero1 * numero2}`, "\x1b[0m");
        case "divisao":
            return console.log ("\x1b[4m\x1b[35m",`O resultado da divisao do primeiro número pelo segundo é ${numero1 / numero2}`, "\x1b[0m");
        default:
            return console.log("opção invalida, digite : soma, subtracao, mutiplicacao ou divisao.")
    }
}else{
    console.log("Por gentileza, informar a  operacao desejada, o primeiro e segundo numero")
}
