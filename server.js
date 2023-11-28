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
// const agentRegister = require("./routes/agentRegister");
const agentRoute = require("./routes/agentRoute");
const adminRegister = require("./routes/adminRegister");
const workExperienceRoute = require("./routes/workExperienceRoute");
const personalRoute = require("./routes/personalRoute");
const academicRoute = require("./routes/academicRoute");
const testRoute = require("./routes/testRoute");
const registerRoute = require("./routes/registerRoute");

app.use("/agent", agentRoute);
// app.use("/agent", agentRegister);
app.use("/admin", adminRegister);
app.use("/student/work",workExperienceRoute)
app.use("/student/personal",personalRoute)
app.use("/student/academic",academicRoute)
app.use("/student/test",testRoute)
app.use("/student/register",registerRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
