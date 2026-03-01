const mongoose = require('mongoose');

async function connectToDb() {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.DB_CONNECT);
        console.log("Connected to DB");
    } catch (error) {
        console.error("DB connection error:", error);
    }
}

module.exports = connectToDb;