import { BaseDatabase } from './BaseDatabase'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export class Migrations extends BaseDatabase {

    public async createTables() {
        await this.getConnection().raw(`
        CREATE TABLE IF NOT EXISTS Lama_Band(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL,
         music_genre VARCHAR(255) NOT NULL,
         responsible VARCHAR(255) UNIQUE NOT NULL 
       );
       CREATE TABLE IF NOT EXISTS Lama_Show (
         id VARCHAR(255) PRIMARY KEY,
         week_day VARCHAR(255) NOT NULL,
         start_time INT NOT NULL,
         end_time INT NOT NULL,
         band_id VARCHAR(255) NOT NULL,
         FOREIGN KEY(band_id) REFERENCES Lama_Band(id)
       );
     
       CREATE TABLE IF NOT EXISTS Lama_User (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL UNIQUE,
         password VARCHAR(255) NOT NULL,
         role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
       );
     `)
            .then(() => { console.log("Tabelas criadas") })
            .catch(printError)
    }
}

const criar = new Migrations()

criar.createTables()
.finally()

// const createTables = () => connection
//     .raw(`
//    CREATE TABLE IF NOT EXISTS NOME_TABELA_BANDAS (
//     id VARCHAR(255) PRIMARY KEY,
//     name VARCHAR(255) UNIQUE NOT NULL,
//     music_genre VARCHAR(255) NOT NULL,
//     responsible VARCHAR(255) UNIQUE NOT NULL
//   )
//   CREATE TABLE IF NOT EXISTS NOME_TABELA_SHOWS (
//     id VARCHAR(255) PRIMARY KEY,
//     week_day VARCHAR(255) NOT NULL,
//     start_time INT NOT NULL,
//     end_time INT NOT NULL,
//     band_id VARCHAR(255) NOT NULL,
//     FOREIGN KEY(band_id) REFERENCES NOME_TABELA_BANDAS(id)
//   );

//   CREATE TABLE IF NOT EXISTS NOME_TABELAS_USUÁRIOS (
//     id VARCHAR(255) PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     password VARCHAR(255) NOT NULL,
//     role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
//   );
// `)
//     .then(() => { console.log("Tabelas criadas") })
//     .catch(printError)

// const closeConnection = () => { connection.destroy() }

// createTables()
//     .finally(closeConnection)