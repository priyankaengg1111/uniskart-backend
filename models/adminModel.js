const mongoose = require("mongoose");

const Admin = mongoose.model(
    "Admin",
    new mongoose.Schema({
        name: String,
        email: String,
        
        password: String,
       
        
   
    })
);

module.exports = Admin;