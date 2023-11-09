const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(
        `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.9wmudcc.mongodb.net/?retryWrites=true&w=majority`
    );
    
    console.log('deu certo')
}

main().catch((err) => console.log(err))

module.exports = main;
