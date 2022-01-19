function operacao ():void{
    const num1:number = Number(process.argv[2])
    const num2:number = Number(process.argv[3])

    const soma:number = num1 + num2 
    const subtracao:number = num1 - num2
    const mutiplicacao:number = num1 * num2
    
    console.log(`Soma = ${soma}`, `Subtração = ${subtracao}`, `Multiplicação = ${mutiplicacao}`)
    if(num1 > num2){
        console.log(`O ${num1} é o maior número`)
    }else{
        console.log(`O ${num2} é o maior número`)
    }
}
operacao()