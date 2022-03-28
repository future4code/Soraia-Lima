import BaseDatabase from "./BaseDatabase";
import { task } from "../model/task";

export class TaskDatabase extends BaseDatabase {

    public insertTask = async (task: task) => {
        await BaseDatabase.connection('to_do_list_tasks')
            .insert({
                id: task.id,
                title: task.title,
                description: task.description,
                deadline: task.deadline,
                author_id: task.authorId
            })
    }

    public selectTaskById = async (id: string): Promise<any> => {
        const result = await BaseDatabase.connection.raw(`
            SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
            JOIN to_do_list_users AS users
            ON author_id = users.id
            WHERE tasks.id = '${id}';
        `)

        return result[0][0]
    }
}