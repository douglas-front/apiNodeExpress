const express = require("express")
const app = express()

require("dotenv").config()
require("./db")

const port = process.env.PORT || 3000

const productRouter = require("./routes/product")   

app.use("https://api-node-express-nine.vercel.app/product", productRouter)

app.listen(port, ()=>{
    console.log(`ok ${port}`)
})


