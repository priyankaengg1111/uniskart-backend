'use strict';
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const agentModel = require("../models/agentModel");
const adminModel = require('../models/adminModel')
module.exports = {
    verifyAgentToken: async function (req, res, next) {
        const authHeader = req.headers["authorization"];
        const token = authHeader?.split(" ")[1];

console.log("lastcheck",process.env.TOKEN_KEY)
        if (token) {
            jwt.verify(token,process.env.TOKEN_KEY, async (err, decodedToken) => {
                if (err) {
                    console.log("gggggggggg",err)
                    res.status(422).json({ message: "Invalid Token" });
                } else {
                    console.log("decodedToken",decodedToken)
                    const agent = await agentModel.findOne(
                        {
                            email: decodedToken?.email,
                            password: decodedToken?.password
                        }
                    ).lean();
                    res.locals.agent = agent;
                    next();
                }
            });
        }
        else {
            res.status(422).json({ message: "Access Denied, User not logged in" });
        }
    }
}