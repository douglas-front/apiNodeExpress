const express = require("express")
const app = express()



require("dotenv").config()
const connectWithDatabase = require("./db")

app.use(express.json())

connectWithDatabase()

const PORT = process.env.PORT || 3000

const productRouter = require("./routes/product")



app.use("/", productRouter)

app.listen(PORT, ()=>{
    console.log(`ok ${PORT}`)
})


