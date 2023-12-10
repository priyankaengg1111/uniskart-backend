'use strict';
var studentModel = require('../models/studentModel.js');
const jwt = require("jsonwebtoken");
/**
 * adminController.js
 * @description :: Server-side logic for managing admins.
 */
module.exports = {
  
    show: async function (req, res) {
       
        try {
            const allData = await studentModel.findOne({
                
                _id: req.params.id,
            });
            console.log("achaacha",req.params.id)
            if (allData != null) {
                res.status(200).json({
                    status: true,
                    data: allData
                });
            } else {
                res.status(200).json({
                    status: true,
                    data: 'noData'
                });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
    /**
     * adminController.remove()
     */
};