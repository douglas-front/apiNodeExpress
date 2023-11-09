const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(
        `${process.env.DBCONECT}`
    );
    
    console.log('deu certo')
}

main().catch((err) => console.log(err))

module.exports = main;
