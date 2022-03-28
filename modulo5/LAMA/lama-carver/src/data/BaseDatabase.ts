import knex from "knex";
import Knex   from "knex";
import dotenv from 'dotenv'

dotenv.config()


export abstract class BaseDatabase {

    // private static connection: Knex | null = null;

    // protected getConnection(): Knex{
    //     if(!BaseDatabase.connection){
    //         BaseDatabase.connection = knex({
    //             client: "mysql",
    //             connection: {
    //               host: process.env.DB_HOST,
    //               port: 3306,
    //               user: process.env.DB_USER,
    //               password: process.env.DB_PASSWORD,
    //               database: process.env.DB_DATABASE_NAME,
                  
    //             },
    //           });  
                   
    //     }
    //     // console.log("123", BaseDatabase.connection)
    //     return BaseDatabase.connection;
    // }

    // public static async destroyConnection(): Promise<void>{
    //     if(BaseDatabase.connection){
    //         await BaseDatabase.connection.destroy();
    //         BaseDatabase.connection = null;
    //     }
    // }

    protected static connection = knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME,
            port: 3306,
            multipleStatements: true
        }
    })
}


console.log("host:", process.env.DB_HOST,
    "user:", process.env.DB_USER,
    "password:", process.env.DB_PASSWORD,
    "database:", process.env.DB_DATABASE_NAME)
