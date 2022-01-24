// 3 -
// Add um item no array de
const tarefas = ["estudar", "codar", "revisar"]
const novaTarefa = process.argv[2]
const novaLista = tarefas.push(novaTarefa)
console.log("nova lista:", tarefas)