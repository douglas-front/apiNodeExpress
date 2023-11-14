const express = require("express")
const app = express()

require("dotenv").config()
require("./db")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use(express.json())

const PORT = process.env.PORT || 3000

const productRouter = require("./routes/product")

app.use("/product", productRouter)


app.listen(PORT, ()=>{
    console.log(`ok ${PORT}`)
})


