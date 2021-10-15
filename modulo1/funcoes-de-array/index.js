// Exercícios de interpretação de código
// 1. Será impresso o item de cada array, com a posição idex e também o array no final de cada item. 
// 2. Será impresso um novo array, contendo apenas os nomes. 
// 3. Será impresso um novo array, contendo os dados da "Amanda" e "Laís."

// Exercícios de escrita de código
// 1.
// const pets = [
//     { nome: "Lupin", raca: "Salsicha" },
//     { nome: "Polly", raca: "Lhasa Apso" },
//     { nome: "Madame", raca: "Poodle" },
//     { nome: "Quentinho", raca: "Salsicha" },
//     { nome: "Fluffy", raca: "Poodle" },
//     { nome: "Caramelo", raca: "Vira-lata" },
// ]
// a

// const pegarNome = (pet) => {
//     return pet.nome
// }

// const nomesPets = pets.map(pegarNome)

// console.log(nomesPets)

//b

// const pegarTiposSalsicha = (pet) => {
//     if (pet.raca === "Salsicha") {
//         return true
//     }
// }
// const petsSalsicha = pets.filter(pegarTiposSalsicha)
// console.log(petsSalsicha)

//c 
// const petsPoodle = pets.filter((pet) => {
//     return pet.raca === "Poodle"}).map((petsPoodle) => {
//         return `Você ganhou um cupom de desconto de 10% para tosar o/a ${petsPoodle.nome}`
// })
// console.log(petsPoodle)
// 2
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]
// a
//  const nomeProdutos = (produtos) =>{
//      return produtos.nome 
//  }
//  const imprimirNomes = produtos.map(nomeProdutos)
//  console.log(imprimirNomes)

//b
// const novaListaDeProduto = produtos.map((produto) => {
//     return { nome: produto.nome, preco: (produto.preco - (produto.preco * 5) / 100).toFixed(2) }
// })

// console.log(novaListaDeProduto)

//c
// const categoriaBebidas = (produto) => {
//     if (produto.categoria === "Bebidas") {
//         return true
//     }
// }
// const bebidas = produtos.filter(categoriaBebidas)
// console.log(bebidas)

//d
// const novoArrayYpe = (produto) => {
//     if (produto.nome.includes("Ypê")) {
//         return true
//     }
// }
// const nomesYpe = produtos.filter(novoArrayYpe)
// console.log(nomesYpe)

// e
// const arrayYpeFrase = produtos.filter((produto) =>{
//     return produto.nome.includes("Ypê")}).map((arrayYpeFrase) => {
//         return `Compre ${arrayYpeFrase.nome} por R$ ${arrayYpeFrase.preco} `
//     })
// console.log(arrayYpeFrase)

// DESAFIOS

// 1 
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]
// // a)

// const ordenarNomes = (pokemom) => {
//     return pokemom.nome
// }

// const nomesOrdenados = pokemons.map(ordenarNomes)
// console.log(nomesOrdenados.sort())

//b
// const ordenarTipos = (pokemom) => {
//     return pokemom.tipo
// }
// const tiposOrdenado = pokemons.map(ordenarTipos)
// console.log([...new Set(tiposOrdenado)])