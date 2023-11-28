'use strict';
var studentModel = require('../models/studentModel.js');
const jwt = require("jsonwebtoken");


/**
 * adminController.js
 * @description :: Server-side logic for managing admins.
 */
module.exports = {
    create: async function (req, res) {

        const { firstName,middleName,lastName,phone,email } = req.body;
        try {
            const existingStudent = await studentModel.findOne({
                email,
            });
            if (existingStudent) {
                res.send({ message: 'email already exists' });
            }
            else {
            
                const student = new studentModel({
                    firstName,
                    middleName,
                    lastName,
                    phone,
                    email,
                });
                let result = await student.save();
                result.password = undefined;
                res.send(result);
            }
        } catch (err) {
            console.log("gg",err)
            res.status(500).json(err);
        }

    },
    /**
     * adminController.remove()
     */
};