const mongoose = require("mongoose");

const Agent = mongoose.model(
    "Agent",
    new mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        password: String,
       
        address: String,
   
    })
);

module.exports = Agent;