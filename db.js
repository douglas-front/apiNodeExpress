const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function connectWithDatabase() {
    try {
        await mongoose.connect(process.env.DBCONECT);
        
        console.log('Mongoose connection successfully')
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

module.exports = connectWithDatabase;
