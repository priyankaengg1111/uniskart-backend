'use strict';
var workExperienceModel = require('../models/workExperienceModel.js');
const jwt = require("jsonwebtoken");
/**
 * adminController.js
 * @description :: Server-side logic for managing admins.
 */
module.exports = {
    create: async function (req, res) {
        const { organizationName, position, jobProfile, workingFrom, workingUpto, salaryMode, workingHere } = req.body;
        var admin = new workExperienceModel({
            organizationName,
            position,
            jobProfile,
            workingFrom,
            workingUpto,
            salaryMode,
            workingHere,	
        });
        let result =await admin.save();
        return result.status(201).json(result);
    },
    /**
     * adminController.remove()
     */
};