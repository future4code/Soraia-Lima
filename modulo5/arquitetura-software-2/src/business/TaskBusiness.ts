import { TaskDatabase } from "../data/TaskDatabase";
import { taskData } from "../model/task";
import { idGenerator } from "../services/generateId";

export class TaskBusiness {
    constructor(
        private idGenerator: idGenerator,
        private taskDatabase: TaskDatabase
    ){}

    public createTaskBusiness = async (taskData: taskData) => {
        if (
            !taskData.title ||
            !taskData.description ||
            !taskData.deadline ||
            !taskData.authorId
        ) {
            throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
        }

        const id: string = this.idGenerator.generateId()

        await this.taskDatabase.insertTask({
            id,
            ...taskData
        })
    }

    public getTaskByIdBusiness = async (   id: string) => {
        const result = await this.taskDatabase.selectTaskById(id)
     
        if (!result) {
           throw new Error("Tarefa não encontrada")
        }
     
        const taskWithUserInfo = {
           id: result.id,
           title: result.title,
           description: result.description,
           deadline: result.deadline,
           status: result.status,
           authorId: result.author_id,
           authorNickname: result.nickname
        }
     
        return taskWithUserInfo
     }
}