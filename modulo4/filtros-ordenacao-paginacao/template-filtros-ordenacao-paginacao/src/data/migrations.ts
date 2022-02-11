import { connection } from "./connection"
import users from "./users.json"
import recipes from "./recipes.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE aula48_exercicio(
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         type VARCHAR(255) NOT NULL
      );

`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

// const insertUsers = () => connection("aula49_users")
//    .insert(users)
//    .then(() => { console.log("Usuários criados") })
//    .catch(printError)

// const insertRecipes = () => connection("aula49_recipes")
//    .insert(recipes)
//    .then(() => { console.log("Receitas criadas") })
//    .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   // .then(insertUsers)
   // .then(insertRecipes)
   .finally(closeConnection)