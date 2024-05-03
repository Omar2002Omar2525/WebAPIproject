const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://oe00547:oe123oe123@cluster0.cl97m6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;