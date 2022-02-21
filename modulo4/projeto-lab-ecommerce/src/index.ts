import app from './app'
import { createProduct } from './endpoints/createProduct'
import { createUser } from './endpoints/createUser'
import { getAllProducts } from './endpoints/getAllProducts'
import { getAllUsers } from './endpoints/getAllUsers'
import { getUserPurchase } from './endpoints/getUserPurchase'
import { createPruchaseRecord } from './endpoints/createPurchaseRecord'


app.get("/users/:user_id/purchases", getUserPurchase)
app.get("/users", getAllUsers)
app.post("/users", createUser)

app.get("/products", getAllProducts)
app.post("/products", createProduct)

app.post("/purchases", createPruchaseRecord)

