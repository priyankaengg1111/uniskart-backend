// server.js
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv =require("dotenv");
dotenv.config();

const app = express();
const port = 5000;

// Parse incoming JSON data
app.use(bodyParser.json());
app.use(cors());
// Handle registration endpoint
const agentRegister = require("./routes/agentRegister");
const adminRegister = require("./routes/adminRegister");
const workExperienceRoute = require("./routes/workExperienceRoute");
const personalRoute = require("./routes/personalRoute");
const academicRoute = require("./routes/academicRoute");


app.use("/agent", agentRegister);
app.use("/admin", adminRegister);
app.use("/student/work",workExperienceRoute)
app.use("/student/personal",personalRoute)
app.use("/student/academic",academicRoute)



// app.post('/agent/register', (req, res) => {
//   const { name,email,phone,password,address } = req.body;
// console.log("jjjjjj",name,email)
//   // You can perform registration logic here (e.g., save to a database)
//   // For simplicity, just send a success response for now
//   res.json({ success: true, message: 'Registration successful' });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
