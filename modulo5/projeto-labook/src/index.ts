import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRouter'
import { postRouter } from './routes/postRouter'
import { frienshipRouter } from './routes/frindshipRouter'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/friendship', frienshipRouter)

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
 })