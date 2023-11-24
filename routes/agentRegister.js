const express = require('express');
// const agentController = require("./controllers/agentController");
const agentModel = require("../models/agentModel");
const mongoose = require('mongoose');
const router = express.Router()
const jwt = require("jsonwebtoken");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
// Check for database connection success
db.on('connected', () => {
  console.log('Mongoose connected to the database');
});
router.post('/register', async (req, res) => {
  const { name, email, phone, password, address } = req.body;
  try {
    const existingStudent = await agentModel.findOne({
      email,
    });
    if (existingStudent) {
      res.send({ message: 'email already exists' });
    }
    else {
      console.log("nnnnnn",name)
      const student = new agentModel({
        name,
        email,
        phone,
        password,
        address
      });
      let result = await student.save();
      result.password = undefined;
      res.send(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    
    const user = await agentModel.findOne({ email });
    if (user && (password == user.password)) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      res.status(200).json({
        token,
        user
      });
    }else{

    
    res.status(200).send("Invalid Credentials");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
