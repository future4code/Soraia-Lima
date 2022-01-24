type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) 1º uso o comando tsc, 2º uso o script start, que craimos para fazer esse processo de transpilação. No caso é "tsc && node ./build/exercicio4"
// b) nesse caso, já uso dentro do src. Mas a difereça está na configuração do tsconfig e na rota do start.
// c) Usando somento o tsc, ele transpila todos os arquivos com final ts, que achar. 

console.log(pokemon1, pokemon2, pokemon3)