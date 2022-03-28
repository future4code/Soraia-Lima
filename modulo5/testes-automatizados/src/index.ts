import express from "express"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

export function performPurchase(user: User, value: number): User | undefined {

  // 1.b
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value
    }
  }

  return undefined
}