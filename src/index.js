const express = require("express")
const app = express()

require("dotenv").config()
const connectWithDatabase = require("./db")

app.use(express.json())

connectWithDatabase()

const PORT = process.env.PORT || 3000

const productRouter = require("./routes/product")

// app.get("/", async (req, res) => {
//     try {
//         return res.status(200).json({message: "Hello world!"})
//     } catch (error) {
//         throw error
//     }
// })

app.use("/product", productRouter)

app.listen(PORT, ()=>{
    console.log(`ok ${PORT}`)
})


