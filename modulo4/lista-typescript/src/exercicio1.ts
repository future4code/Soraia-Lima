function imprimirDados(nome: string, data: string): string {
    let novaData = data.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${novaData[0]} do mês ${novaData[1]} do ano de ${novaData[2]}.`

}

console.log(imprimirDados("Soraia", "17/02/1997"))