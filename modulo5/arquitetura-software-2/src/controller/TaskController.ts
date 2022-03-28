import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness";
import { taskInputDTO } from "../model/task";

export class TaksController {
    constructor(
        private taskBusiness: TaskBusiness
    ) { }

    public createTask = async (req: Request, res: Response) => {

        try {

            const input: taskInputDTO = {
                title: req.body.title,
                description: req.body.description,
                deadline: req.body.deadline,
                authorId: req.body.authorId,
            }

            await this.taskBusiness.createTaskBusiness(input)

            res.status(201).send()

        } catch (error: any) {

            res.statusMessage = error.message
            res.status(500).end()
        }
    }

    public getTaskById = async (req: Request, res: Response) => {

        try {

            const id: string = req.body.id

            const task = await this.taskBusiness.getTaskByIdBusiness(id)

            res.status(200).send({ task })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}

