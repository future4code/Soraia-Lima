import { AddressInfo } from "net"
import express, { Express } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { createUser } from "./endopoints/createUser"


dotenv.config()

const app: Express = express();
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})



app.post("/andress", createUser)