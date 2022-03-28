import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { CustomError } from "../error/CustomError";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "Lama_User";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      console.log(id, email, name, password, role)
      await BaseDatabase.connection("Lama_User")
        .insert({
          id,
          email,
          name,
          password,
          role
        })
    } catch (error) {
      if (error instanceof CustomError) {
        throw new Error(error.message);
      }

    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const [result] = await BaseDatabase.connection("Lama_User")
      .select("*")
      
      .where({ email })

    return result 
  }

}
