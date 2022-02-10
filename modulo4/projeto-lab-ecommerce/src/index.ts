import app from './app'
import { createProduct } from './endpoints/createProduct'
import { createUser } from './endpoints/createUser'
import { getAllProducts } from './endpoints/getAllProducts'
import { getAllUsers } from './endpoints/getAllUsers'
import { pruchaseRecord } from './endpoints/purchaseRecord'


app.get("/users", getAllUsers)
app.post("/users", createUser)

app.get("/products", getAllProducts)
app.post("/products", createProduct)

app.post("/purchases", pruchaseRecord)