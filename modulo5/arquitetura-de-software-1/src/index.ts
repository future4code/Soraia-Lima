import app from "./controller/app";
import { UserController } from "./controller/UserController";

const userController = new UserController()

app.get('/all', userController.getAllUsers)
app.post('/signup', userController.signup)
app.post('/login', userController.login)
app.delete('/user/delete/:id', userController.deleteUser)
