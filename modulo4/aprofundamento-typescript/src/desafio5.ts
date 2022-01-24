type Consultas = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}
let lista: Consultas[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Soraia", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

function ordenar(a: { nome: string }, b: { nome: string }): number {
    if (a.nome < b.nome)
        return -1;
    else if (a.nome > b.nome)
        return 1;
    return 0;

}
console.log(lista.sort(ordenar));
