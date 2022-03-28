import express from 'express'
import { TaskBusiness } from '../business/TaskBusiness'
import { TaksController } from '../controller/TaskController'
import { TaskDatabase } from '../data/TaskDatabase'
import { idGenerator } from '../services/generateId'

export const taskRouter = express.Router()

const taskController = new TaksController(
    new TaskBusiness(
        new idGenerator(),
        new TaskDatabase()
    )
)

taskRouter.put('/add', taskController.createTask)
taskRouter.get('/id', taskController.getTaskById)