import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness";

export class TaksController {
    constructor(
        private taskBusiness: TaskBusiness
    ) { }

    public createTask = async (req: Request, res: Response) => {

        try {
            const { title, description, deadline, authorId } = req.body

            const a =await this.taskBusiness.createTaskBusiness({
                title, description, deadline, authorId
            })

            res.status(201).send({a})

        } catch (error: any) {

            res.statusMessage = error.message
            res.status(500).end()
        }
    }

    public getTaskById = async (req: Request, res: Response) => {

        try {
            const { id } = req.params

            const task = this.taskBusiness.getTaskByIdBusiness(id)

            res.status(200).send(task)

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}

