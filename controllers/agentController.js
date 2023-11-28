'use strict';
var agentModel = require('../models/agentModel.js');
const jwt = require("jsonwebtoken");


/**
 * adminController.js
 * @description :: Server-side logic for managing admins.
 */
module.exports = {
    create: async function (req, res) {

        const { name, email, phone, password, address } = req.body;
        try {
            const existingStudent = await agentModel.findOne({
                email,
            });
            if (existingStudent) {
                res.send({ message: 'email already exists' });
            }
            else {
                console.log("nnnnnn", name)
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

    },
    login: async function (req, res) {

        const { email, password } = req.body;
        try {

            const user = await agentModel.findOne({ email });
            if (user && (password == user.password)) {
                // Create token
                console.log("myscrecet",process.env.TOKEN_KEY)
                const token = jwt.sign(
                    { user_id: user._id, email,password },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "24h",
                    }
                );
                res.status(200).json({
                    token,
                    user
                });
            } else {


                res.status(200).send("Invalid Credentials");
            }
        } catch (err) {
            res.status(500).json(err);
        }

    }
    /**
     * adminController.remove()
     */
};